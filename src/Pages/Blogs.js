import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const blogs = [
  //Class
  {
    name: "Demand and Competition",
    category: "CourseBlogs",
    content:
      "In this class we have to create a web business and or blog. I decided I wanted to keep the gospel central in my web business plan so I based my decisions around that. Keeping demand and competition is important in determining if there is a market for such a niche topic such as the tie-ins of technology and religious views. In class and in preparation for class we looked over the Hoth keyword planner, Google Keyword planner, and there were a few alternatives as well. These tools help us predict the usefulness of our keywords in advanced to running them in our ad campaigns. \n\nIn our preparation we discussed a case study about how a group of people had to choose a business idea to pursue. They discussed options like a chess website or snowboard shop and we used a keyword planner to help them in this case study to choose what we would pursue in their shoes, as well as to teach us the practicality of choosing a business based on its competition and demand. The tools we used provided the data we needed to make informed decisions as opposed to selfish or self-interested but likely unsuccessful business ideas. \n\nIn particular I knew my religious blog would be tough to find keywords for due to the nature of the business strategy I chose. But writing about a topic I was interested In was very important to me. By applying the principles we learned in class I was able to find a set of keywords I thought would work for my needs that had demand and competition I felt like I could work with.",
    image: "/Demand_and_Competition.jpg",
  },
  {
    name: "Lessons Learned About Google AdSense for My Religious Tech Blog",
    category: "CourseBlogs",
    content: "As I continued to work on my religious blog, we learned about Google AdSense. Google AdSense was important to understand as it is how I am able to target my ads to a particular audience, which is highly relevant to me who has a very small niche audience. Google AdSense is a tool that saves us time with Ad automation to place ads on our website in the most optimal places for conversions. With AdSense, much of the process is automated, however there is a lot to learn about website ad placement. For example we learned about where and when ads should be run. We likely shouldnt run ads on an ecommerce platform as it makes the user experience worse and might push people away from making a purchase which is the goal of that website. Find business models that work together, don't mix advertising with models the advertising may hurt.",
    image: "/Google_AdSense.jpg",
  },
  {
    name: "What I Learned About Affiliate Marketing and Dropshipping",
    category: "CourseBlogs",
    content: "In class and in preparation we learned about two business models in particular as possible business opportunities. They had nothing to do with the model I had chosen but there were still some valuable insights. \n\nDropshipping is a business model where you basically buy something for a cheap price and sell it for more. You can automate this to make the purchase when someone purchases it from your website so that you don't need to hold inventory at all if you choose. However dropshipping often involves cheap products from other countries so taking a risk and holding inventory yourself will help you get your products delivered quicker for better customer experiences. We did an exercise in class comparing Alibaba and other similar businesses who sell bulk products for cheap, a way that we can get products to brand and resell for more. We got to see how the margins would look for certain products and what it would look like if we chose to. \n\nAffiliate marketing is an interesting business model I would actually consider myself in the future. This business model is a model where we have an online shop or write reviews or make content featuring products that we do not sell ourselves, but instead collect a commission for generating a lead to the sale of a product. An example of this is youtube reviews, often when you click the link provided in the video it is an affiliate link that lets the company you are buying from who created the lead to their sale so they can get payed. I like this model as in the future I consider creating online content for a side-hustle. ",
    image: "/Affiliate_Marketing.jpg",
  },
  {
    name: "Choosing a Host and Domain",
    category: "CourseBlogs",
    content: "To have a website visible on the web we need to host the website, and to make it secure and reputable, we need a domain. A domain is the link we type in or click on that sends us to the server the website is hosted on. At the scale we are at now the lowest tier or even free tiers are likely to work for what we need hosting wise. As websites grow you need to pay for either the hardware to self-host at scale or find a service that meets your hosting needs. In all honesty I did not do a ton of research on a host, I just looked for one that met my needs. IONOS is what I went with due to its good reviews but I would likely do more research in the future for a better price or better service. My domain ended up costing me only like 10$ a month for a pretty good domain. I ended up going with https://www.devotiondevs.org/. However It proved to be difficult to live host my code and I was not able to keep up with updating the website throughout the course and opted to work in my local environment and update the host at the very end of the semester.",
    image: "/Ionos_Hosting.png",
  },
  {
    name: "Desingning the Website",
    category: "CourseBlogs",
    content: "We learned a fair bit in regards to site design guidelines and how to go about designing our website in general. This topic is a relevant topic as a good design is a part of your brand image and perceived professionalism. \n\nAs part of our preparation we learned how to use AI to design and research design for our website. I opted to avoid this process as learning how to design websites is exactly what I need to do for my career so I made myself do more work for the sake of learning. \n\nColor theory plays a role in website design and color schemes are both a part of your brand as well as the color palettes cohesion makes the website more appealing to look at and easier to navigate. \n\nOverall when designing your website it is important to choose designs that are user friendly, simple, and that reflect your branding and professionalism. When developing websites in the future I will spend a lot more time on this process as the website I developed for this class did not get my full attention.",
    image: "/colors.png",
  },
  {
    name: "Keywords and Google Ads: Key to a successful campaign",
    category: "CourseBlogs",
    content: "To choose the right keywords for your campaign, start by ensuring they are highly relevant to your business. The more specific the keyword, the more likely it is to reach users who are ready to convert. Google offers different match types for keywords, including broad match, phrase match, and exact match. \n\nOne of the core parts of this class is managing google ads and using this data to optimize the money we put into it versus the money we get out of it. We learned how to set up campaigns with keywords that we found back when we learned about keywords using the keyword planners. For a successful text search ad campaign we need good keywords, good headers, and good descriptions. \n\nOne thing to note about these campaigns is that they keywords determine what a user searches causes google to serve our specific ad. The headers are actually combined using AI to find the most relevant and most successful combination of headers to get clicks. The descriptions are also selected in a way that allows for optimal results. With these google campaigns we can set a daily budget that reflects our overall budget, for me that was 50 cents at the start and 3 dollars towards the end of this campaign. My goal with this campaign was to learn how to run a web business ads campaign not so much to actually get anything directly from this business. I learned how to manage keywords headers and descriptions for optimal performance of my campaigns and how to manage the cost versus payout of the campaign by looking at metrics such as cost per conversion and then I could ask myself if my conversions would lead to more revenue than the ad and hopefully at a maintainable margin. Overall learning about google ad campaigns was very helpful for future endeavors. ",
    image: "/keywords.jpg",
  },
  {
    name: "Google Analytics, ROI, and Conversion Tracking",
    category: "CourseBlogs",
    content: "When running online ads, tracking their performance is crucial. Because of this we use analytics and conversion tracking. Google analytics shows us a ton of useful information and for our specific use case we mostly measure conversions. Each conversion is something we define as a user committing to our product or a sale of some kind. For me conversions where 100% of clicks as a conversion would simply be the rendering of a pay-per-view ad. Implementing pay per click ads is also another option I could have chosen and setting up that conversion would give me more data on how this model would increase/decrease my revenue for my business in particular. ",
    image: "/Analytics.png",
  },
  {
    name: "Optimizing Keywords and Responsive Search Ad Optimization",
    category: "CourseBlogs",
    content: "By default, our ad campaigns utilized what are called “responsive search ad optimization”. This is a system powered by data to predict and serve responsive ads based on both what the user searched as well as what is the most optimal combination of data. Each and we run has multiple headers and descriptions. Often our ad only shows two of those headers and 1 or 2 descriptions at a time. We should take this into account when choosing our headers and descriptions and ensure they create a sense of flow or unison in our ad. One thing I noticed was that the responsive search ad optimization will choose not only which combination of headers to use, but also what order makes the most sense for those headers. We should optimize our keywords to pair well with our specific ads and look at our ad from the perspective of potential customers, will Google serve our content when people are looking for it, or will we be an irrelevant result because we did not choose accurate keywords that are also successful keywords? ",
    image: "/optimization.png",
  },
  {
    name: "Search Engine Optimization",
    category: "CourseBlogs",
    content: "I have mentioned SEO a few times in previous articles, but here I’ll dive into it a little bit more. There are three main ways we can push our website up in relevance. The first is google ads, when you see websites that are sponsored they sit at the top of the results in google. After the sponsored websites, google uses search engine optimization to determine the order of the results. There are many aspects Google takes into calculating what websites to show first. I personally ran the MySiteAuditor web app and received some great feedback on how to optimize my website. Many of the issues I had were accessibility issues and performance issues which makes my website seem unreliable. I was able to remedy a few of the issues it presented already but there is a lot more work for me to do to optimize my SEO.",
    image: "/SEO.jpg",
  },
  {
    name: "Lessons Learned, Final Report Blog",
    category: "CourseBlogs",
    content: "There were a lot of very valuable lessons I learned in this class and across the various units. Some of the units were relevant to my specific website such as SEO and google ad placement. But realistically in this business model paying for ads myself would absolutely not be sustained simply by running my own ads. The return on investment for paying for ads does not nearly cover the money made from pay per view ads. There where many business models I learned about including dropshipping, lead generation, affiliate marketing, and e-commerce so if I wanted to pursue them in the future I would be alot more prepared than I would have prior to this class. I think there are alot of principles from this class that can be applied at any kind of business though. We talked alot about ethical AI use in this class and I feel like this is relevant in all sorts of areas of business.   I would say my favorite thing I learned in this class is managing google ad campaigns. As someone who wants to get into web business creation and marketing this is a skill I didn’t have any experience in and now I feel like I could jump into a proper campaign with a real budget. OVerall this class taught me a lot of web business creation skills as well as reinforced soft skills that have been a common pattern throughout my studies. ",
    image: "/byui.jpg",
  },


  //Contractors
  
];

function Blogs() {
  const location = useLocation();

  const [filters, setFilters] = useState({
    AllBlogs: true,
    CourseBlogs: false,
    ReligiousBlogs: false,
  });

  useEffect(() => {
    if (location.state?.selectedCategory) {
      setFilters({
        AllBlogs: location.state.selectedCategory === "AllBlogs",
        CourseBlogs: location.state.selectedCategory === "CourseBlogs",
        ReligiousBlogs: location.state.selectedCategory === "ReligiousBlogs",
      });
    }
  }, [location.state]);

  const filteredBlogs = blogs.filter((blog) => {
    if (filters.AllBlogs) return true;
    if (filters.CourseBlogs && blog.category === "CourseBlogs") return true;
    if (filters.ReligiousBlogs && blog.category === "ReligiousBlogs") return true;
    return false;
  });

  const handleCheckboxChange = (category) => {
    setFilters({
      AllBlogs: category === "AllBlogs",
      CourseBlogs: category === "CourseBlogs",
      ReligiousBlogs: category === "ReligiousBlogs",
    });
  };

  return (
    <div className="blogs-container" style={{ fontFamily: "Poppins, sans-serif", width: "100%", boxSizing: "border-box", padding: "20px" }}>
      <div className="blogs-header" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px", backgroundColor: "orange", padding: "20px", borderRadius: "8px" }}>
        <h2 style={{ margin: 0, fontSize: "2em" }}>Blog Posts</h2>
        <div className="filter-checkboxes">
          <label style={{ display: "inline-flex", alignItems: "center", marginRight: "20px", fontSize: "1.2em" }}>
            <input type="checkbox" checked={filters.AllBlogs} onChange={() => handleCheckboxChange("AllBlogs")} style={{ marginRight: "10px" }} />
            All Blogs
          </label>
          <label style={{ display: "inline-flex", alignItems: "center", marginRight: "20px", fontSize: "1.2em" }}>
            <input type="checkbox" checked={filters.CourseBlogs} onChange={() => handleCheckboxChange("CourseBlogs")} style={{ marginRight: "10px" }} />
            Course Blogs
          </label>
          <label style={{ display: "inline-flex", alignItems: "center", fontSize: "1.2em" }}>
            <input type="checkbox" checked={filters.ReligiousBlogs} onChange={() => handleCheckboxChange("ReligiousBlogs")} style={{ marginRight: "10px" }} />
            Religious Blogs
          </label>
        </div>
      </div>
      <div className="filtered-blogs" style={{ width: "100%" }}>
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((service, index) => (
            <article key={service.name} className="service-article" style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "40px", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              {service.image && (
                <img src={service.image} alt={service.name} style={{ width: "100%", height: "auto", maxHeight: "300px", objectFit: "contain", borderRadius: "8px", marginBottom: "20px" }} />
              )}
              <div style={{ width: "100%", textAlign: "left" }}>
                <h3 style={{ fontSize: "1.8em", marginBottom: "10px" }}>{service.name}</h3>
                <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
                  {service.content.split('\n').map((paragraph, index) => (
                    <React.Fragment key={index}>
                      {paragraph}
                      <br />
                    </React.Fragment>
                  ))}
                </p>
              </div>
            </article>
          ))
        ) : (
          <p style={{ fontSize: "1.2em" }}>No blogs match your filter criteria.</p>
        )}
      </div>
    </div>
  );
}

export default Blogs;
