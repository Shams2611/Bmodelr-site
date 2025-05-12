import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const name = formData.get("name")
    const email = formData.get("email")
    const company = formData.get("company")

    // Log the submission for debugging
    console.log("Form submission received:", { name, email, company })

    // Store the submission in a database or send to an email service
    // For now, we'll just simulate a successful submission

    // Return success response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json(
      {
        success: false,
        error: "Form submission failed",
      },
      { status: 500 },
    )
  }
}
