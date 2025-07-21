import { useState } from "react";
import klaviyo from "../assets/klaviyo.webp";
import carshop from "../assets/mycarstuff.shop.webp";

const data = [
  {
    title:
      "Klaviyo Form Integration on Shopify Store - Embedded Form not displaying",
    description:
      "A client reached out with an issue where their Klaviyo embedded form wasn't showing up on their Shopify store. After gaining access, I inspected the site and noticed two Klaviyo scripts, one from the third-party app and another hardcoded in the theme's <head>. I removed the unnecessary script to clean up potential conflicts. The real breakthrough came when I reviewed the form settings in Klaviyo's dashboard. Under the Targeting & Behavior tab, the form was set to display only on mobile devices, which explained why it wasn't visible on desktop. I updated the setting to show on all devices, and the form appeared instantly. The client appreciated the quick diagnosis and resolution issue solved within 30 minutes.",
    img: klaviyo,
    alt: "Klaviyo dashboard showing form integration settings",
    width: 1363,
    height: 722
  },
  {
    title:
      "Amazon Affiliate Button Logic for Selected Products in Shopify",
    description:
      `A client reached out with a request to add "Buy on Amazon" buttons for specific affiliate products on their Shopify store. The goal was to ensure that only certain products marked as Amazon affiliates would display a special button linking to the Amazon product page, while all other products retained the standard "Add to Cart" button. To solve this, I created a custom product metafield in the Shopify admin. This allowed the client to toggle a product as an Amazon affiliate and input the corresponding Amazon URL when adding new products. I then implemented conditional logic in the Liquid theme files to check for this metafield. If the metafield was present and filled, the storefront would dynamically show a "Buy on Amazon" button linking to the provided URL. If not, the default store button would display.`,
    img: carshop,
    alt: "Shopify store showing custom Amazon affiliate button implementation",
    width: 1200,
    height: 800
  },
];

const Issues = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpanded = (index) => {
    setExpandedItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const getPreviewText = (text, limit = 200) => {
    if (text.length <= limit) return text;
    return text.slice(0, limit) + "...";
  };
  return (
    <>
      <section className="bg-darkBg min-h-screen text-center justify-center items-center">
        <div className="py-16">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Problems I have Resolved for Clients
          </h1>

          {/* issues boxes */}
          <div className="grid grid-cols-1 px-4 mx-auto md:max-w-7xl pt-4">
            {/* mapping*/}
            {data.map((item, index) => (
              <div key={index} className="flex md:flex-row flex-col p-6 bg-white border-primary border-6 rounded-lg shadow-primary/60 shadow-2xl hover:scale-101 transition-all duration-300 mb-6">
                
                {/* Fixed image with proper aspect ratio */}
                <div className="flex-shrink-0 md:w-100 w-full">
                  <img
                    src={item.img}
                    className="rounded-lg border-gray-300 border-3 shadow-lg w-full h-auto object-cover aspect-[16/9]"
                    alt={item.alt}
                    width={item.width}
                    height={item.height}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                
                <div className="flex flex-col mt-4 md:mt-0 justify-center items-start md:ml-6">
                  <h2 className="text-xl md:text-2xl text-center md:text-left font-semibold mb-4 text-primary">
                    {item.title}
                  </h2>
                  <p className="text-sm text-justify md:text-left text-gray-600 mb-4 leading-relaxed">
                    {expandedItems[index] ? item.description : getPreviewText(item.description)}
                  </p>
                  
                  {item.description.length > 200 && (
                    <button
                      onClick={() => toggleExpanded(index)}
                      className="text-primary hover:text-primary/80 text-sm font-medium transition-colors duration-200 flex items-center gap-1"
                    >
                      {expandedItems[index] ? "Show Less" : "See More"}
                      <svg
                        className={`w-4 h-4 transition-transform duration-200 ${
                          expandedItems[index] ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Issues;