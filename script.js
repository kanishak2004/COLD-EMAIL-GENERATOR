document.getElementById("emailForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const company = document.getElementById("company").value.trim();
  const yourName = document.getElementById("yourName").value.trim();
  const position = document.getElementById("position").value.trim();
  const template = document.getElementById("template").value;

  let email = "";

  switch (template) {
    case "professional":
      email = `Subject: Exploring Synergy with ${company}
  
  Hi ${name},
  
  I hope you're doing well. My name is ${yourName}, and I'm currently working as a ${position}. I’ve been following ${company}'s recent developments, especially your initiatives in innovation and customer engagement — truly impressive!
  
  The reason I’m reaching out is because I believe there’s a meaningful opportunity for collaboration. My background in tech-driven solutions could align well with your goals, especially in enhancing customer experience and streamlining operations.
  
  Would you be open to a brief call next week to explore potential synergies between our work?
  
  Looking forward to the possibility of speaking soon.
  
  Best regards,  
  ${yourName}`;
      break;

    case "friendly":
      email = `Subject: Love What ${company} Is Doing – Let's Connect!
  
  Hey ${name},
  
  Hope your week’s going great! I’m ${yourName}, a ${position}, and I’ve been genuinely inspired by what you and the team at ${company} are building — the energy and creativity are really refreshing.
  
  I’m reaching out because I think we’d have a fun and productive conversation about potential ways we could collaborate or support each other. I’ve worked on a few projects recently that may align with what you're doing at ${company}.
  
  If you’re up for it, I’d love to hop on a quick chat next week.
  
  Wishing you an amazing day!
  
  Cheers,  
  ${yourName}`;
      break;

    case "direct":
      email = `Subject: 15-Min Chat to Explore Synergy
  
  Hi ${name},
  
  I'm ${yourName}, a ${position}, and I’ve been following ${company} for a while now. I admire the work you're doing, and I believe there’s a quick-win opportunity for us to connect.
  
  I’d like to briefly discuss a few ways we could work together — no fluff, just straight to the point.
  
  Would next Tuesday or Wednesday work for a 15-minute Zoom call?
  
  Thanks for considering,  
  ${yourName}`;
      break;

    case "followup":
      email = `Subject: Following Up on My Previous Email
  
  Hi ${name},
  
  I wanted to follow up on the email I sent last week regarding potential collaboration opportunities with ${company}. I’m very interested in exploring ways we could work together and add value.
  
  Please let me know if you might have some time for a quick chat.
  
  Looking forward to hearing from you.
  
  Best,  
  ${yourName}`;
      break;

    case "valuepitch":
      email = `Subject: How We Can Help ${company} Achieve More
  
  Hi ${name},
  
  My name is ${yourName}, a ${position}, and I’ve been impressed by ${company}'s trajectory. I wanted to reach out because I believe our expertise could help accelerate your growth and efficiency.
  
  Specifically, I have some ideas on how we can enhance your [insert relevant area, e.g., marketing strategy, operations, customer engagement], which could lead to measurable improvements in [specific metrics].
  
  Would you be open to a conversation to explore these ideas?
  
  Best regards,  
  ${yourName}`;
      break;
  }

  document.getElementById("emailOutput").textContent = email;
  document.getElementById("result").classList.remove("hidden");
});

document.getElementById("copyBtn").addEventListener("click", function () {
  const text = document.getElementById("emailOutput").textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => alert("Email copied to clipboard!"));
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const text = document.getElementById("emailOutput").textContent;
  const blob = new Blob([text], { type: "text/plain" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = "cold-email.txt";
  link.click();
});

document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});
