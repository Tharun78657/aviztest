const classVideos = [
  {
    _id: 1,
    day: "Day-0",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to Our AWS with DevSecOps Telugu",
    thumbnailImg: "assets/images/Day0.jpg",
    infoContainer:
      "Welcome to the AWS & DevSecOps Program with Avinash Reddy! In this demo session, you'll get a complete overview of the course roadmap, learning approach, tools you'll master, and real-world projects you'll work on. Discover how this program will prepare you for cloud, DevOps, and security roles and help you build industry-ready skills before we begin the full journey.",
    iframeSource:
      "https://www.youtube.com/embed/09r9UbApRp4?si=2pJW0VpJlk719oKo",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 2,
    day: "Day 1 Demo",
    ClassHeader: "aws class",
    SecondHeader: "What is DevOps? How AWS & DevOps Work Together and AWS Account creation",
    infoContainer: "In this session, understand the fundamentals of DevOps and learn how it connects with AWS in real-world environments. Discover why DevOps and cloud skills are essential, how they work together in modern IT and AWS Account creation.",
    iframeSource:
      "https://www.youtube.com/embed/xRTlp_KpHTQ?si=3IkKN1zY6h4tNk23",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 3,
    day: "Day 2 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS Global Infrastructure, MFA Setup and Introduction to Identity and Access Management (IAM)",
    infoContainer:
      "Introduction the fundamentals of AWS, including its Global Infrastructure (Regions, Availability Zones) for building reliable and scalable applications. It also covers setting up Multi-Factor Authentication (MFA) to enhance account security and provides an overview of Identity and Access Management (IAM) for managing users, roles, and permissions securely using best practices like least privilege.",
    iframeSource:
      "https://www.youtube.com/embed/5gA5TzwFf90?si=4MJTduiqCoceW6LP",
    thubnailImg: "assets/images/day2.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 4,
    day: "Day 3 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM Introduction, Password Policies and Support Plans",
    infoContainer:
      "In this session, we explored the fundamentals of AWS Identity and Access Management (IAM), focusing on secure access control through users, groups, roles, and permissions. We also covered the implementation of strong password policies to enhance account security, along with an overview of AWS Support Plans to ensure effective technical assistance and operational continuity.",
    iframeSource:
      "https://www.youtube.com/embed/7fWQfe5gFeo?si=xNqqIRbgZ1YvQR3g",
    thubnailImg: "assets/images/day3.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 5,
    day: "Day 4 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS IAM Policies Deep Dive, Permissions Boundary, Cloudtrail and Credentials report",
    infoContainer:
      "This session provides a deep dive into AWS IAM policies, including advanced permission management techniques such as permissions boundaries. It also covers AWS CloudTrail for monitoring and auditing account activity, along with credential reports to enhance security, compliance, and access governance within AWS environments",
    iframeSource:
      "https://www.youtube.com/embed/ajGwGC8fdRA?si=z7HOWUXB_kLSdZvS",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 6,
    day: "Day 5 Demo",
    ClassHeader: "aws class",
    SecondHeader: " IAM Wrapup and Introduction to EC2 and pricing options",
    infoContainer:
      "A brief wrap-up of AWS IAM concepts, covering roles and policies for secure access, followed by an introduction to Amazon EC2 and its pricing options, including On-Demand, Reserved, and Spot Instances.",
    iframeSource:
      "https://www.youtube.com/embed/EHazekFMDbI?si=lWp2vsV6DWxgBcZO",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 7,
    day: "Day 6 Demo",
    ClassHeader: "aws class",
    SecondHeader: "EC2 Windows Instance Setup Blueprint From AMI Selection To Live Server ",
    infoContainer:
      "Setup a Windows-based EC2 instance on AWS, starting from AMI selection through deployment to a fully accessible live server. This blueprint covers key steps including instance configuration, security settings, RDP access, and initial setup for production readiness. It ensures a streamlined, secure, and scalable deployment process.",
    iframeSource:
      "https://www.youtube.com/embed/rfUMoK2MxJc?si=fhQa05yvmyyhas5j",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  // {
  //   _id: 8,
  //   day: "Day 7 Demo",
  //   ClassHeader: "aws class",
  //   SecondHeader: "EC2 Linux Connect methods and Intro to Security groups",
  //   infoContainer:
  //     "In this session, explore EC2 Linux connection methods step by step and understand how Security Groups work. Learn how to securely access your instances and manage network permissions with confidence.",
  //   iframeSource:
  //     "https://www.youtube.com/embed/pGlBs4o84A0?si=Y7c74NGauWgZYuhQ",
  //   thubnailImg: "assets/images/day4.jpg",
  //   register:
  //     "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  // },
];

function createDaysessions(dayVideos) {
  return `
      <div class="course-sectionDemo">
            <div style="border-radius:12px;" class="video-container" onclick="playVideo(this)">
             
               
              <iframe style="width:100%; height:279px" width="450" height="315" src="${dayVideos.iframeSource}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
            <div class="content-container">
                <div>
                    <div class="content-header">
                        <h2>${dayVideos.day} | ${dayVideos.SecondHeader}</h2>
                    </div>
                    <div class="content-description">
                        <p>${dayVideos.infoContainer}</p>
                    </div>
                </div>
                
               <a href="https://wa.me/917997777597" target="_blank" class="register-btn">
                    <div style="border: 1px solid black;" class="sm-btn" id="start_Exam">
                        <div id="how-link" class="get-started">Register now</div>
                        <i class="fa-regular fa-arrow-right"></i>
                    </div>
                </a>
            </div>
        </div>
    `;
}

// Implement the playVideo function to handle video interactions
function playVideo(container) {
  const thumbnail = container.querySelector(".thumbnail");
  const playButton = container.querySelector(".play-button");
  const iframe = container.querySelector("iframe");

  // Hide thumbnail and play button, show iframe
  thumbnail.style.display = "none";
  playButton.style.display = "none";
  iframe.style.display = "block";

  // Add autoplay parameter to iframe source if it doesn't already have it
  if (!iframe.src.includes("autoplay=1")) {
    iframe.src += (iframe.src.includes("?") ? "&" : "?") + "autoplay=1";
  }
}

const awsVideosListContainer = document.querySelector(".Course_contentdaily");

classVideos.forEach((dayVideosaws) => {
  const classSessions = createDaysessions(dayVideosaws);
  awsVideosListContainer.innerHTML += classSessions;
});
