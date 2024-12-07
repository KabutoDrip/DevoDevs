import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

export const blogs = [
  //Class
  {
    name: "Demand and Competition",
    category: "CourseBlogs",
    content:
      "Starting a web business or blog, such as a religious blog, involves making decisions rooted in both demand and competition. In class, we explored how tools like Google Keyword Planner or Hoth Keyword Planner can provide critical insights into these factors, helping us objectively evaluate niches for potential success.\nTake inspiration from Joe, Amy, and Trevor’s story, which we discussed in class. They debated how to choose between web business ideas, like a chess site or a snowboard shop, and used keyword tools to analyze demand (monthly search volume) and competition levels (keyword difficulty). These tools provided objective, quantifiable data, avoiding the pitfalls of purely subjective decision-making. \nFor your religious blog, start by identifying topics related to your goals. If you plan to write about Old Testament teachings, search for terms like 'Old Testament lessons' or 'faith and perseverance stories.' In class, we saw how keyword tools reveal search volumes, showing how many people are actively searching for similar content. \nNext, assess competition using the competition rating provided by these tools. As we learned, high demand paired with low competition is ideal but rare. For instance, niche topics like 'Exodus commentary' may have moderate competition, making them manageable yet impactful. \nLastly, we learned the importance of passion. Joe, Amy, and Trevor’s case emphasized that data must align with personal interests. Writing on topics you care about, combined with strategic keyword insights, ensures your blog is both fulfilling and effective. \nBy applying the principles and tools we studied in class, you can position your religious blog for meaningful impact and success.",
    image: "/",
  },
  {
    name: "Lessons Learned About Google AdSense for My Religious Tech Blog",
    category: "CourseBlogs",
    content: "As I continue to grow my religious tech blog, one of the most valuable lessons I’ve learned is how important it is to optimize my approach to Google AdSense. While monetizing my blog with ads can be a great way to generate revenue, it requires strategic planning and careful consideration to ensure the ads align with my audience's interests and values.\n\nOne key lesson has been the importance of targeting relevant ads. Google AdSense uses algorithms to serve ads based on content, but sometimes ads don’t quite match the tone or message of my religious tech focus. I’ve learned to refine my content and use specific keywords that not only attract traffic but also align with the types of products or blogs that would be valuable to my readers. For example, promoting Christian-based tech tools or apps that support faith-based learning has been more effective than generic tech ads.\n\nAnother lesson is the necessity of maintaining a balance between user experience and ad placement. Too many ads can overwhelm visitors and cause them to leave the site. I’ve discovered that placing ads in a way that doesn’t disrupt the flow of my content, while still ensuring visibility, is crucial for both user engagement and revenue.\n\nFinally, staying informed about AdSense policies and updates has been key. Google frequently updates its terms and features, and understanding these changes ensures that I stay compliant and avoid penalties.\n\nIn summary, while Google AdSense offers great monetization opportunities, it’s essential to fine-tune ad placements and content to create a harmonious balance between earning revenue and maintaining the integrity of my religious tech blog.",
    image: "/",
  },
  {
    name: "What I Learned About Affiliate Marketing and Dropshipping",
    category: "CourseBlogs",
    content: "What I Learned About Affiliate Marketing and Dropshipping: In exploring affiliate marketing and dropshipping, I’ve gained valuable insights that have shaped how I approach online business, even though these models are not directly relevant to the business model I’ve chosen for my blog. Dropshipping, especially through platforms like AliExpress, offers a low-cost way to start an online store with zero upfront inventory costs. I learned that AliExpress charges no fees for dropshipping, unlike competitor platforms like Doba or Worldwide Brands, which have monthly access fees. This makes it an attractive option for beginners with limited capital. However, I also realized that successful dropshipping isn’t about offering lower prices or unique products, but rather about mastering marketing and customer blog. Effective marketing helps customers find, evaluate, and buy products, while strong customer support ensures a satisfying shopping experience, distinguishing your store from others.\n\nOne unique advantage of using AliExpress for dropshipping is that many suppliers offer pre-made product photos and descriptions. Though these can be used right away, I’ve learned that investing time into creating better visuals and more detailed product descriptions can help elevate my store’s professionalism and appeal. Additionally, integrating dropshipping from AliExpress to Amazon through Shopify is possible, and this multi-channel approach can help scale a business effectively.\n\nOn the affiliate marketing side, I found that success lies in building long-term projects around topics you're passionate about, rather than pursuing quick wins. Setting up an affiliate site requires careful planning—choosing a domain, hosting, and creating content that resonates with your audience. Patience is key, as it takes time to build traffic and see returns. Once the site is up and running, I learned that incorporating affiliate links naturally within content (instead of relying solely on banner ads) can lead to more meaningful conversions.\n\nWhile these models may not be directly relevant to the business model I’ve chosen, the knowledge gained from exploring them will be useful for future projects or expanding my understanding of online business strategies. Both dropshipping and affiliate marketing are performance-driven models that require a combination of strategy, persistence, and adaptability. By focusing on quality content and customer experience, I can optimize my chances of building a sustainable, profitable online business in the future.",
    image: "/",
  },
  {
    name: "Chosing a Host and Domain",
    category: "CourseBlogs",
    content: "Choosing a host and domain for your website can seem overwhelming, especially when you're just starting out. There are a lot of technical terms and options to consider, but focusing on a few key factors will help you make the right decision. As your website grows, you may need to upgrade your hosting, but don’t worry—switching hosts is relatively easy. I went with IONOS for both my hosting and domain registration. I found them to be reliable and affordable, which made the decision easy. When choosing a domain, I went with https://www.devotiondevs.org/, as it aligns perfectly with my blog’s focus and mission. It's important to choose a host that works well with your website builder. For example, IONOS works seamlessly with WordPress, which I use for my blog. I also made sure to check the total cost for hosting, considering both the introductory specials and the overall price. Many hosts offer low monthly fees, but it's crucial to understand the length of the contract and any additional costs involved. Fortunately, IONOS included my domain name in their hosting plan, saving me an extra $10-$12. One of the most important factors for me was reliable customer support, and IONOS offers excellent assistance whenever I need help. Although it���s easy to get caught up in the technical details, I learned that the key to choosing a good host and domain is finding a blog that suits your specific needs, whether it's reliability, cost, or ease of use.",
    image: "/",
  },
  {
    name: "Desingning the Website",
    category: "CourseBlogs",
    content: "What I Learned About Designing a Website\n\nDesigning a website isn’t just about making it look good—it’s about creating a smooth, functional experience for users. Through the process, I learned some important lessons that shifted my perspective on what really matters in web design.\n\nTypography is one of the first things I focused on. The font you choose plays a big role in readability and user experience. It’s essential to pick a typeface that’s clear, easy to skim, and works across different devices. I saw how Burberry’s shift to a modern sans-serif font in 2018 made their branding more accessible and aligned with their target audience while still keeping a premium feel.\n\nI also learned the importance of testing how a website handles auto-translation. With many users relying on translation tools, it’s crucial to make sure your site’s layout and content stay clear across different languages. I tested a site’s translation into German, and the layout remained neat and functional without any major issues.\n\nColor is another design element that shouldn’t be underestimated. It influences how users interact with your site. For example, Buzzfeed uses bright reds and yellows to grab attention, while blue (often linked to trust) is reserved for important buttons and links. It’s a reminder that color can subtly guide users and set the right tone for your brand.\n\nWhitespace is also key. It helps make a site less overwhelming by providing space for the content to breathe. It’s a simple way to make your site easier to navigate and focus users on what matters.\n\nIn the end, I learned that effective web design is about balancing good aesthetics with functionality. A well-designed site should be easy to use, visually appealing, and aligned with the brand’s goals.",
    image: "/",
  },
  {
    name: "title",
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
                <img src={service.image} alt={service.name} style={{ width: "100%", maxHeight: "300px", objectFit: "cover", borderRadius: "8px", marginBottom: "20px" }} />
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
