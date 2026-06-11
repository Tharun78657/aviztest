const classVideos = [
  {
    _id: 1,
    day: "Day-0",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to Our AWS with DevSecOps Program - Telugu",
    thumbnailImg: "assets/images/Day0.jpg",
    infoContainer:
      "Welcome to the AWS & DevSecOps Program with Avinash Reddy! In this demo session, you'll get a complete overview of the course roadmap, learning approach, tools you'll master, and real-world projects you'll work on. Discover how this program will prepare you for cloud, DevOps, and security roles and help you build industry-ready skills before we begin the full journey.",
    iframeSource:
      "https://www.youtube.com/embed/jAxw9bU1WR8?si=ZEGrdDO7gu4FggT9",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 2,
    day: "Day 1 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to Cloud and DevOps with Waterfall vs Agile vs DevOps",
    infoContainer: "In this session, we cover the Introduction to Cloud and DevOps, and explore the differences between Waterfall, Agile, and DevOps methodologies. You'll learn how these approaches work and their role in modern software development and cloud infrastructure.",
    iframeSource:
      "https://www.youtube.com/embed/NtKQNMvINFI?si=UrB1397K238saRrV",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 3,
    day: "Day 2",
    ClassHeader: "aws class",
    SecondHeader: "AWS Account Creation, Support Plans and Global Infrastructure Deep-Dive",
    infoContainer:
      "This session covers the step-by-step process of AWS Account Creation, an overview of AWS Support Plans, and a deep-dive into AWS Global Infrastructure. It provides the foundational knowledge needed to start your cloud journey securely.",
    iframeSource:
      "https://www.youtube.com/embed/5Wx_Rwswo1k?si=rxtP2-ycL73lq4Im",
    thubnailImg: "assets/images/day2.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 4,
    day: "Day 3 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS Edge Locations, MFA Enable, IAM Introduction and User Creations",
    infoContainer:
      "In this session, we dive into AWS Edge Locations and their role in the global infrastructure. We also introduce AWS Identity and Access Management (IAM), covering how to enable Multi-Factor Authentication (MFA) for enhanced security, and the step-by-step process of creating and managing IAM users.",
    iframeSource:
      "https://www.youtube.com/embed/_CZsKJtdubY?si=-dzEfWTnQdmfmF2F",
    thubnailImg: "assets/images/day3.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 5,
    day: "Day 4 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM Policies deep dive with custom policy creation with conditions and policy simulator",
    infoContainer:
      "In-depth exploration of IAM policies, including policy structure, elements, and evaluation logic. Hands-on demonstration of creating custom IAM policies with specific permissions and conditions. Using the IAM Policy Simulator to test and validate policy behavior before deployment.",
    iframeSource:
      "https://www.youtube.com/embed/D7spcCy-nok?si=Fw1-Osh3IQHcwMPc",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  // {
  //   _id: 6,
  //   day: "Day 5 Demo",
  //   ClassHeader: "aws class",
  //   SecondHeader: " Introduction to EC2, Deep Dive into Pricing Models",
  //   infoContainer:
  //     "Overview of Amazon EC2 (Elastic Compute Cloud) and its features, along with a detailed examination of the various pricing models available for EC2 instances, including On-Demand, Reserved Instances, Spot Instances, and Savings Plans, to help optimize costs based on workload requirements.",
  //   iframeSource:
  //     "https://www.youtube.com/embed/ws3gj96Vhjc?si=Kcp8Fibqod4xWMPs",
  //   thubnailImg: "assets/images/day4.jpg",
  //   register:
  //     "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  // },
  // {
  //   _id: 7,
  //   day: "Day 6 Demo",
  //   ClassHeader: "aws class",
  //   SecondHeader: "EC2 Windows Instance Setup Blueprint From AMI Selection To Live Server ",
  //   infoContainer:
  //     "Setup a Windows-based EC2 instance on AWS, starting from AMI selection through deployment to a fully accessible live server. This blueprint covers key steps including instance configuration, security settings, RDP access, and initial setup for production readiness. It ensures a streamlined, secure, and scalable deployment process.",
  //   iframeSource:
  //     "https://www.youtube.com/embed/rfUMoK2MxJc?si=fhQa05yvmyyhas5j",
  //   thubnailImg: "assets/images/day4.jpg",
  //   register:
  //     "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  // },
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
