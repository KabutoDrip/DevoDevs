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
    content: "What I Learned About Designing a Website\n\nDesigning a website isn’t just about making it look good—it’s about creating a smooth, functional experience for users. Through the process, I learned some important lessons that shifted my perspective on what really matters in web design.\n\nTypography is one of the first things I focused on. The font you choose plays a big role in readability and user experience. It’s essential to pick a typeface that’s clear, easy to skim, and works across different devices. I saw how Burberry’s shift to a modern sans-serif font in 2018 made their branding more accessible and aligned with their target audience while still keeping a premium feel.\n\nI also learned the importance of testing how a website handles auto-translation. With many users relying on translation tools, it’s crucial to make sure your site’s layout and content stay clear across different languages. I tested a site’s translation into German, and the layout remained neat and functional without any major issues.\n\nColor is another design element that shouldn’t be underestimated. It influences how users interact with your site. For example, Buzzfeed uses bright reds and yellows to grab attention, while blue (often linked to trust) is reserved for important buttons and links. It’s a reminder that color can subtly guide users and set the right tone for your brand.\n\nWhitespace is also key. It helps make a site less overwhelming by providing space for the content to breathe. It’s a simple way to make your site easier to navigate and focus users on what matters.\n\nIn the end, I learned that effective web design is about balancing good aesthetics with functionality. A well-designed site should be easy to use, visually appealing, and aligned with the brand’s goals.",
    image: "/",
  },
  {
    name: "Keywords and Google Ads: Key to a successful campaign",
    category: "CourseBlogs",
    content: "Google Ads is a powerful tool for online advertising, offering businesses the ability to connect with potential customers at the precise moment they're searching for products or services.\n\nOne of the key components that make a Google Ads campaign successful is the effective use of keywords. Keywords are the terms or phrases that trigger your ads when users search on Google. By carefully selecting the right keywords, you can ensure that your ads reach the right audience at the right time, increasing your chances of driving quality traffic to your website.\n\nKeywords form the backbone of search campaigns in Google Ads. When a user enters a query into Google, the platform matches that search with relevant keywords that advertisers have selected. For example, if you sell shoes, you might target keywords like 'buy running shoes' or 'best shoes for walking.' When users search for these terms, your ad could be shown, driving more targeted traffic to your business.\n\nThe key to success here is ensuring that the keywords you select align closely with what your customers are looking for. The more relevant your keywords are, the higher the likelihood your ad will be shown, and the more likely it will convert into a sale.\n\nProperly structuring your Google Ads account is essential for maximizing the effectiveness of your ads. The Google Ads account is organized into layers, including the Account, Campaigns, Ad Groups, and Ads. Keywords are placed within Ad Groups, which are organized by themes. This structure helps maintain relevance between your keywords, ads, and landing pages. For example, if you're advertising a home services business, you could create an Ad Group for 'plumbing services' with keywords like 'emergency plumber' or 'clogged drain repair.' This ensures that your ad and landing page are highly relevant to the user's search, improving your Quality Score and lowering your cost-per-click (CPC).\n\nTo choose the right keywords for your campaign, start by ensuring they are highly relevant to your business. The more specific the keyword, the more likely it is to reach users who are ready to convert. Google offers different match types for keywords, including broad match, phrase match, and exact match.",
    image: "/",
  },
  {
    name: "Ad Position Quality and Groups ",
    category: "CourseBlogs",
    content: "Ad Position, Quality, and Ad Groups: A Complete Guide to Improving Your Google Ads Performance\n\nWhen managing Google Ads campaigns, three critical factors play a huge role in determining your success: ad position, ad quality, and ad groups. Each of these elements influences how well your ads perform, how much you pay per click, and how often your ads show up in search results. Understanding how to optimize these areas can drastically improve your ad performance and help you get the best possible return on investment.\n\nAd Position: What It Is and Why It Matters\n\nAd position refers to the location of your ad on a search results page. Google Ads uses a ranking system to determine where your ad will appear. While many advertisers think of ad position as simply the place where their ad shows, it’s much more nuanced. Your ad position is influenced by a combination of factors, including your bid amount, your ad quality, and your competitors’ bids.\n\nThe most important thing to know about ad position is that higher positions do not always guarantee better performance. While you may believe that being in the first position will generate the most clicks, it’s not always true. Ads in lower positions can still perform well, especially if the ad quality is high and the bid strategy is optimized. In fact, it’s often better to focus on improving ad relevance and quality to ensure your ads show up at the right time with the right message.\n\nAd Quality: The Key to a Higher Ad Position\n\nAd quality is one of the most critical factors influencing your ad’s position and performance. Google uses a metric called Quality Score to evaluate the relevance and effectiveness of your ads. This score is based on several factors, including the relevance of your keywords, the quality of your landing page, and the click-through rate (CTR) of your ads.\n\nA high-quality score means your ad is more likely to appear in a higher position without the need for higher bids. It also means you’ll likely pay less per click, as Google rewards advertisers who provide a better experience to users. To improve your ad quality, focus on creating highly relevant ads that align with your keywords, ensuring your landing pages are optimized for user experience, and consistently monitoring and improving your CTR.\n\nAd Groups: Structuring Your Ads for Success\n\nThe structure of your Google Ads account can make a significant difference in the effectiveness of your campaigns. One of the most important structural elements is the ad group. An ad group is a collection of ads that share a set of keywords. Each ad group is responsible for targeting a specific set of keywords, and it’s important to organize your ad groups in a way that ensures relevancy and better performance.\n\nThe key to structuring your ad groups effectively is ensuring that each one is tightly themed around a specific topic or keyword set. For example, if you're running an ad campaign for a clothing store, you might have separate ad groups for “women’s clothing,” “men’s clothing,” and “children’s clothing.” Each ad group should contain ads and keywords that closely match the user’s search intent. This tight alignment will help improve your ad quality and increase the likelihood of higher ad positions.\n\nOptimizing Ad Position, Quality, and Groups for Better Performance\n\nTo maximize your Google Ads performance, you need to continuously optimize all three of these factors: ad position, ad quality, and ad groups. Here are some strategies to help you improve in each area:\n\n1. Ad Position: Focus on improving your Quality Score rather than just increasing your bids. A high-quality ad can often achieve a high position without the need for inflated bids.\n\n2. Ad Quality: Regularly review your ad copy and keyword relevance. Make sure your landing pages are fast, mobile-friendly, and relevant to the search query. The better the user experience, the higher your Quality Score.\n\n3. Ad Groups: Organize your ad groups into tightly themed categories based on user intent. Avoid having too many keywords in a single ad group, as this can decrease relevance and hurt your ad performance.\n\nConclusion\n\nBy understanding and optimizing ad position, ad quality, and ad groups, you can significantly improve the performance of your Google Ads campaigns. High ad quality and well-structured ad groups help you earn higher positions without necessarily increasing your bid amounts. By focusing on relevance, user experience, and strategic organization, you can enhance your Google Ads performance, reduce costs, and ultimately achieve better results. Start implementing these strategies today to boost your campaign’s success and maximize your ROI.",
    image: "/",
  },
  {
    name: "Google Analytics, Workday for Ad Campaigns, ROI, and Conversion Tracking",
    category: "CourseBlogs",
    content: "When managing online advertising campaigns, it’s essential to track and measure their performance accurately to make informed decisions. Two powerful tools—Google Analytics and Workday—play pivotal roles in tracking key metrics like Return on Investment (ROI) and conversion rates. Understanding how to use these tools effectively can help you refine your ad campaigns, maximize ROI, and boost overall business growth.\n\nGoogle Analytics: The Backbone of Campaign Tracking\n\nGoogle Analytics is one of the most powerful tools for tracking website traffic and ad campaign performance. By connecting your Google Ads account with Google Analytics, you can gain in-depth insights into how users interact with your website after clicking your ads. With Google Analytics, you can track key metrics such as bounce rate, session duration, and user flow to better understand the effectiveness of your campaigns.\n\nOne of the most significant advantages of using Google Analytics is its ability to track conversions. By setting up goals, you can track actions that matter most to your business, such as purchases, form submissions, or account sign-ups. This data helps you understand which ads are driving valuable actions and allows you to make data-driven decisions about where to allocate your budget.\n\nWorkday for Ad Campaigns: Integrating Data for a Holistic View\n\nWorkday, primarily known for its human resources and financial management features, also offers valuable insights for ad campaigns when integrated with marketing platforms. Workday’s ability to manage financial data, alongside your marketing and sales performance, gives you a holistic view of your ad campaign’s ROI. By linking your advertising efforts with your financial reports, you can easily calculate the true cost of your campaigns and understand how they contribute to your business’s bottom line.\n\nFor example, Workday’s integration with ad platforms can help you track how much revenue is generated by leads that come from your paid ads, giving you a clearer picture of your campaign’s success. With this data, you can better allocate resources and refine your strategies, knowing exactly where to focus your ad spend for the best results.\n\nROI: Understanding the Impact of Your Ad Spend\n\nROI (Return on Investment) is a crucial metric for measuring the effectiveness of your ad campaigns. It allows you to assess how much revenue you’re earning in comparison to what you’re spending on ads. A positive ROI means that your campaigns are generating more revenue than the cost of the ads, while a negative ROI signals the need for optimization.\n\nTo calculate ROI, use the formula: \n\nROI = (Revenue from Ads - Cost of Ads) / Cost of Ads\n\nFor example, if you spent $1,000 on a Google Ads campaign and generated $3,000 in revenue, your ROI would be 2, or 200%. This means you earned two dollars for every dollar spent on ads. Regularly monitoring ROI allows you to make necessary adjustments to optimize your campaigns and improve your advertising strategy over time.\n\nConversion Tracking: Measuring Success and Actionable Insights\n\nConversion tracking is the process of tracking specific actions that users take on your website, such as filling out a form, making a purchase, or signing up for a newsletter. This metric is essential because it provides insight into whether your ads are driving valuable interactions and achieving the goals you've set for your campaigns.\n\nIn Google Ads, conversion tracking is relatively simple to set up. By adding a tracking code (or tag) to your website or landing page, you can track when users complete a predefined action. Whether you’re looking to track online purchases, lead submissions, or other specific conversions, setting up proper conversion tracking enables you to see which campaigns, ads, and keywords are contributing to your objectives.\n\nBy combining conversion tracking with insights from Google Analytics and Workday, you can gain a complete view of how your ads are performing. Are they driving quality traffic that converts? How do they contribute to your revenue? Answering these questions ensures that you’re investing your ad budget in the right place.\n\nUsing Analytics to Optimize Campaigns\n\nTo make the most of Google Analytics, Workday, and conversion tracking, it’s essential to continually analyze the data and optimize your campaigns based on the insights you gather. A few strategies to consider include:\n\n1. Refining Targeting: Use the data from Google Analytics to identify which demographics, locations, and devices perform best for your campaigns. Adjust your targeting to focus on these segments for improved results.\n\n2. Improving Ad Creative: Analyze which ads lead to the most conversions, and use this information to improve your ad copy and creative elements.\n\n3. Optimizing Ad Spend: Use ROI data from Workday to adjust your ad budget allocation. Focus more on campaigns or channels that are generating the highest ROI and cut back on those with poor performance.\n\nConclusion\n\nIncorporating tools like Google Analytics, Workday, and conversion tracking into your ad campaigns helps you gain a clear picture of how your ads are performing and their impact on your business’s success. By closely monitoring key metrics such as ROI and conversions, you can make data-driven decisions that optimize your ad campaigns, increase efficiency, and maximize profits. Whether you're a beginner or an experienced marketer, understanding how to track and measure your ads effectively is the key to long-term success.",
    image: "/",
  },
  {
    name: "Optimizing Keywords and Responsive Search Ad Optimization",
    category: "CourseBlogs",
    content: "In today’s digital world, driving traffic to your blog is more competitive than ever. For a niche blog like one focused on religious technology, having the right optimization strategy is key to ensuring your content reaches the right audience. Keywords and responsive search ads (RSAs) are essential tools that can significantly improve your visibility on search engines like Google. Let’s explore how optimizing your keywords and leveraging RSAs can enhance your blog’s reach and engagement.\n\nOptimizing Keywords: The Foundation of Search Visibility\n\nKeyword optimization is the cornerstone of any successful digital marketing strategy. It’s crucial for ensuring that your blog shows up when people search for topics related to religious tech—whether it’s the latest trends in faith-based apps, reviews of Bible study software, or discussions on tech for churches.\n\nStart by identifying high-intent keywords that align with your blog’s niche. For instance, keywords like “best Bible apps,” “church management software,” or “religious tech tools for churches” would be highly relevant to your audience. Use tools like Google Keyword Planner, SEMrush, or Ahrefs to research these terms and find variations that have a good search volume but low competition. Targeting long-tail keywords—phrases that are longer and more specific—can be particularly effective. Phrases like “affordable religious tech tools for non-profit churches” may not have high search volume, but they can attract highly interested visitors who are more likely to engage with your content.\n\nOnce you have your keywords, integrate them naturally into your blog posts, headings, and metadata. This signals to search engines that your content is relevant to users’ queries. However, don’t overstuff your content with keywords. Instead, focus on providing valuable, in-depth information that answers your audience’s questions and aligns with their needs. Google rewards high-quality, informative content that matches user intent.\n\nResponsive Search Ads (RSAs): Reaching the Right Audience\n\nResponsive search ads (RSAs) are an incredibly powerful tool for driving targeted traffic to your blog. Unlike traditional search ads, RSAs allow you to create multiple headlines and descriptions that Google automatically tests and combines to find the best-performing combinations. This flexibility helps ensure that your ads are shown to the most relevant audience, improving both click-through rates (CTR) and conversion rates.\n\nFor your religious tech blog, you could create RSAs that target specific aspects of your niche. For example, headlines might include “Top Religious Tech Tools for Churches,” “Best Bible Apps for Devotionals,” or “Affordable Church Software for Ministry Growth.” Google will rotate and test these different headlines to determine which ones resonate most with users searching for faith-based tech solutions.\n\nBy testing various combinations of keywords, headlines, and descriptions, RSAs can help you refine your ad messaging over time. The more relevant and engaging your ad copy is to your audience, the higher your chances of driving traffic to your blog.\n\nThe Synergy of Keyword Optimization and RSAs\n\nWhen you combine well-optimized keywords with responsive search ads, you create a robust system that works together to attract the right traffic to your religious tech blog. Here’s how the two strategies complement each other:\n\n1. Targeting the Right Search Intent: By optimizing your blog posts with the right keywords, you ensure that when users search for specific religious tech topics, your content ranks well. At the same time, RSAs can help amplify your reach by targeting users with search queries that match your blog’s focus. Together, you cover both organic and paid channels.\n\n2. Improved Relevance: Google’s algorithm favors relevance. By using optimized keywords in your content and pairing them with tailored RSAs, you signal to Google that your blog is a valuable resource for users searching for religious technology. This can improve both your organic search rankings and the performance of your paid ads.\n\n3. Refining Ad Performance: Once your RSAs are up and running, you’ll get real-time data on which headlines and descriptions resonate most with your audience. This data, combined with insights from keyword performance on your blog, helps you refine both your content and your paid ad campaigns for better performance.\n\nTracking and Improving Performance\n\nOnce your keywords are optimized and your RSAs are live, it’s essential to track their performance regularly. Use tools like Google Analytics to monitor traffic from both organic and paid sources. This will help you identify which keywords are driving the most traffic to your blog and which RSAs are delivering the best results.\n\nBy analyzing performance metrics like click-through rates, conversion rates, and engagement metrics (such as average time spent on the page), you can continually refine your strategies. If a particular set of keywords is bringing in visitors but not generating much engagement, it may be time to adjust the content or rework the RSA messaging. Conversely, if certain RSAs are performing well, consider creating more variations of those ads for greater reach.\n\nConclusion\n\nFor your religious tech blog, keyword optimization and responsive search ad optimization are two essential components of a successful digital marketing strategy. By targeting the right keywords and leveraging the power of RSAs, you can increase your blog’s visibility, attract the right audience, and drive more traffic to your content. Regular tracking and optimization of both your organic and paid efforts will help ensure that your blog reaches its full potential, delivering valuable insights on faith-based technology to a wider audience.",
    image: "/",
  },
  {
    name: "",
    category: "CourseBlogs",
    content: "",
    image: "/",
  },
  {
    name: "Lessons Learned, Final Report Blog",
    category: "CourseBlogs",
    content: "",
    image: "/",
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
