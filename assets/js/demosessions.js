const classVideos = [
  {
    _id: 1,
    day: "Day 0 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Introduction to Course",
    thumbnailImg: "assets/images/Day0.jpg",
    infoContainer:
      "Welcome to the AWS with Avinash Reddy Course! In this introductory session, we will explore the course structure, objectives, and what you can expect to learn. Get ready to embark on your cloud journey!",
    iframeSource:
      "https://www.youtube.com/embed/mvF3pnVbth8?si=k6YJQsmOa9V3QgZr",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 2,
    day: "Day 1 Demo",
    ClassHeader: "aws class",
    SecondHeader: "DevOps and AWS",
    infoContainer: "Understanding DevOps and AWS importance in Real World",
    iframeSource:
      "https://www.youtube.com/embed/8RItULKpoV4?si=Ad0XWjtfLhfVYyfP",

    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 3,
    day: "Day 2 Demo",
    ClassHeader: "aws class",
    SecondHeader: "AWS Global Infrastructure & Account creation",
    infoContainer:
      "A quick intro to AWS and its core services, followed by an overview of its global infrastructure — including Regions, Availability Zones, and Edge Locations — to understand how AWS delivers secure, scalable, and reliable cloud solutions worldwide.",
    iframeSource:
      "https://www.youtube.com/embed/juLVcacZVrU?si=yxr7txdS8NNgqTCT",
    thubnailImg: "assets/images/day2.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 4,
    day: "Day 3 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Create your first IAM user, Activate MFA on Root Account",
    infoContainer:
      "Learn how to create your first IAM user, activate MFA on your root account, and understand the importance of security best practices in AWS.",
    iframeSource:
      "https://www.youtube.com/embed/mow4xVwPSAE?si=r8Rxxwxl1IlELuHm",
    thubnailImg: "assets/images/day3.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 5,
    day: "Day 4 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Understanding IAM Policies for permissions management",
    infoContainer:
      "Dive into AWS Identity and Access Management (IAM) policies to learn how to manage permissions effectively, ensuring secure access control for your AWS resources.",
    iframeSource:
      "https://www.youtube.com/embed/zpNsTDzuYbc?si=XDa2_R9wqP2BtIDR",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 6,
    day: "Day 5 Demo",
    ClassHeader: "aws class",
    SecondHeader: "CloudTrail, Inline Policy, Credentials report",
    infoContainer:
      "Explore AWS CloudTrail for monitoring account activity, learn about inline policies for fine-grained permissions, and understand how to generate credentials reports to maintain security and compliance.",
    iframeSource:
      "https://www.youtube.com/embed/8yN2hKa0dSo?si=kt6z8CJxYHJzr5It",
    thubnailImg: "assets/images/day4.jpg",
    register:
      "https://awswithavinashreddy.my.webex.com/weblink/register/r0b7834a679fdc79bc7dd2dc51efbe3d4",
  },
  {
    _id: 7,
    day: "Day 6 Demo",
    ClassHeader: "aws class",
    SecondHeader: "Launch your First EC2 Instance",
    infoContainer:
      "Learn how to launch your first EC2 instance, configure security groups, and understand the basics of managing virtual servers in the cloud.",
    iframeSource:
      "https://www.youtube.com/embed/1Q9vpce9me4?si=LanyIeh_8UQD8Jx-",
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
