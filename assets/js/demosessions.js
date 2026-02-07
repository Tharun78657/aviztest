const classVideos = [
  {
    _id: 1,
    day: "Day 0 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to AWS and DevSecOps Program",
    thumbnailImg: "assets/images/Day0.jpg",
    infoContainer:
      "Welcome to the AWS & DevSecOps Program with Avinash Reddy! In this demo session, you'll get a complete overview of the course roadmap, learning approach, tools you'll master, and real-world projects you'll work on. Discover how this program will prepare you for cloud, DevOps, and security roles and help you build industry-ready skills before we begin the full journey.",
    iframeSource:
      "https://www.youtube.com/embed/SbBYuto82qE?si=EOyA110ohmi9dmFl",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 2,
    day: "Day 1 Demo",
    ClassHeader: "aws class",
    SecondHeader: "What is DevOps & How DevOps and AWS is Interlinked",
    infoContainer: "In this session, understand the fundamentals of DevOps and learn how it connects with AWS in real-world environments. Discover why DevOps and cloud skills are essential, how they work together in modern IT, and how this combination powers scalable, secure, and automated systems.",
    iframeSource:
      "https://www.youtube.com/embed/MMMPZ_zr1vg?si=wMg2-62qdQx29fzU",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 3,
    day: "Day 2 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS Account creation, MFA and Support Plans Overview",
    infoContainer:
      "Learn how to set up an AWS account, configure MFA for security, understand AWS Support Plans and best practices for managing access and cloud security from day one.",
    iframeSource:
      "https://www.youtube.com/embed/TtfgLH-ZNdg?si=iREdrjt-mfHRgNFh",
    thubnailImg: "assets/images/day2.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 4,
    day: "Day 3 Demo",
    ClassHeader: "aws class",
    SecondHeader: " AWS Global infrastructure & IAM User Creation",
    infoContainer:
      "In this session, explore AWS Regions & Availability Zones, learn how to create your first IAM user, enable MFA on your root account, and understand essential AWS security best practices to build a strong and secure cloud foundation.",
    iframeSource:
      "https://www.youtube.com/embed/wunX9DCq8Cg?si=3qvFU6BOCm-1CRl_",
    thubnailImg: "assets/images/day3.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 5,
    day: "Day 4 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM Policies Deep Dive",
    infoContainer:
      "Dive into AWS Identity and Access Management (IAM) policies to learn how to manage permissions effectively, ensuring secure access control for your AWS resources.",
    iframeSource:
      "https://www.youtube.com/embed/0i_33np2TBc?si=bBt2GG_fq7JcxZZM",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 6,
    day: "Day 5 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM Inline Policies, Permission Boundaries, cloudtrail & Policy conditions",
    infoContainer:
      "Deep dive into IAM Inline Policies, Permission Boundaries, and Policy Conditions to control access with precision. Learn how AWS CloudTrail tracks account activity and how credentials reports help ensure security, compliance, and visibility across your AWS environment.",
    iframeSource:
      "https://www.youtube.com/embed/gegrDy-vJiI?si=-ycf8ucNbi_Nutam",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 7,
    day: "Day 6 Demo",
    ClassHeader: "aws class",
    SecondHeader: "IAM warp up & EC2 introduction & Launching LINUX Instance",
    infoContainer:
      "Master the essentials of AWS security with a quick IAM recap, then step into compute services by understanding EC2 fundamentals and launching your first Linux instance. Perfect for beginners building strong cloud foundations!",
    iframeSource:
      "https://www.youtube.com/embed/GN6XdivxjCU?si=6448q2lM4yFKA9tq",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 8,
    day: "Day 7 Demo",
    ClassHeader: "aws class",
    SecondHeader: "EC2 Linux Connect methods and Intro to Security groups",
    infoContainer:
      "In this session, explore EC2 Linux connection methods step by step and understand how Security Groups work. Learn how to securely access your instances and manage network permissions with confidence.",
    iframeSource:
      "https://www.youtube.com/embed/pGlBs4o84A0?si=Y7c74NGauWgZYuhQ",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
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
                        <h2>${dayVideos.day}: ${dayVideos.SecondHeader}</h2>
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
