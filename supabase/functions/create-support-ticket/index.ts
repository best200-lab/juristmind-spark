import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "https://esm.sh/resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface SupportTicketRequest {
  name: string;
  email: string;
  company?: string;
  issue: string;
  description: string;
  priority: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, company, issue, description, priority }: SupportTicketRequest = await req.json();

    console.log("Received support ticket submission:", { name, email, issue, priority });

    const ticketId = `JURIST-${Date.now()}`;
    
    const emailContent = `
      <h2>New Support Ticket Created</h2>
      <p><strong>Ticket ID:</strong> ${ticketId}</p>
      <p><strong>Priority:</strong> ${priority}</p>
      <p><strong>From:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      ${company ? `<p><strong>Company:</strong> ${company}</p>` : ''}
      <p><strong>Issue:</strong> ${issue}</p>
      <p><strong>Description:</strong></p>
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 10px 0;">
        ${description.replace(/\n/g, '<br>')}
      </div>
      <hr>
      <p><em>This ticket was created through the JURIST MIND support system.</em></p>
    `;

    // Send ticket to support team
    const supportEmailResponse = await resend.emails.send({
      from: "JURIST MIND Support <onboarding@resend.dev>",
      to: ["Ogunseun7@gmail.com"],
      subject: `Support Ticket ${ticketId}: ${issue}`,
      html: emailContent,
      replyTo: email,
    });

    console.log("Support email sent successfully:", supportEmailResponse);

    // Send confirmation to user
    const userEmailResponse = await resend.emails.send({
      from: "JURIST MIND Support <onboarding@resend.dev>",
      to: [email],
      subject: `Support Ticket Created: ${ticketId}`,
      html: `
        <h1>Support Ticket Created Successfully</h1>
        <p>Hello ${name},</p>
        <p>Your support ticket has been created successfully. Here are the details:</p>
        <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
          <p><strong>Ticket ID:</strong> ${ticketId}</p>
          <p><strong>Issue:</strong> ${issue}</p>
          <p><strong>Priority:</strong> ${priority}</p>
          <p><strong>Status:</strong> Open</p>
        </div>
        <p>Our support team will review your ticket and respond within 24 hours for standard priority tickets, or within 4 hours for high priority tickets.</p>
        <p>You can reference your ticket using ID: <strong>${ticketId}</strong></p>
        <p>Best regards,<br>JURIST MIND Support Team</p>
      `,
    });

    console.log("User ticket confirmation sent successfully:", userEmailResponse);

    return new Response(JSON.stringify({ 
      success: true, 
      ticketId,
      message: "Support ticket created successfully",
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in create-support-ticket function:", error);
    return new Response(
      JSON.stringify({ 
        error: error.message,
        success: false 
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);