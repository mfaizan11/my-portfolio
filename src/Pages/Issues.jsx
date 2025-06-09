import klaviyo from "../assets/klaviyo.webp";
import carshop from "../assets/mycarstuff.shop.webp";

const data = [
  {
    title:
      "Klaviyo Form Integration on Shopify Store - Embedded Form not displaying",
    description:
      "A client reached out with an issue where their Klaviyo embedded form wasn’t showing up on their Shopify store. After gaining access, I inspected the site and noticed two Klaviyo scripts, one from the third-party app and another hardcoded in the theme’s <head>. I removed the unnecessary script to clean up potential conflicts. The real breakthrough came when I reviewed the form settings in Klaviyo’s dashboard. Under the Targeting & Behavior tab, the form was set to display only on mobile devices, which explained why it wasn’t visible on desktop. I updated the setting to show on all devices, and the form appeared instantly. The client appreciated the quick diagnosis and resolution issue solved within 30 minutes.",
    img: klaviyo  
  },
  {
    title:
      "Amazon Affiliate Button Logic for Selected Products in Shopify",
    description:
      `A client reached out with a request to add "Buy on Amazon" buttons for specific affiliate products on their Shopify store. The goal was to ensure that only certain products—marked as Amazon affiliates—would display a special button linking to the Amazon product page, while all other products retained the standard “Add to Cart” button. To solve this, I created a custom product metafield in the Shopify admin. This allowed the client to toggle a product as an Amazon affiliate and input the corresponding Amazon URL when adding new products. I then implemented conditional logic in the Liquid theme files to check for this metafield. If the metafield was present and filled, the storefront would dynamically show a "Buy on Amazon" button linking to the provided URL. If not, the default store button would display.`,
    img: carshop  
  },
];

const Issues = () => {
  return (
    <>
      <section className="bg-darkBg min-h-screen text-center justify-center items-center">
        <div className="py-16">
          <h1 className="text-3xl  md:text-5xl font-bold text-primary mb-4 sm:mb-6 px-4">
            Problems I’ve Resolved for Clients
          </h1>

          {/* issues boxes */}
          <div className="grid grid-cols-1 px-4 mx-auto md:w-[180vh] pt-4">
            {/* mapping*/}
            {data.map((item, index) => (
            <div key={index} className="flex md:flex-row flex-col p-6 bg-white border-primary border-6 rounded-lg shadow-primary/60 shadow-2xl hover:scale-101 transition-all duration-300 mb-6">
              
              <img
                src={item.img}
                className="rounded-lg border-gray-300 border-3 shadow-lg"
                alt=""
                height="200vh"
                width="500vh"
              />
              <div className="flex flex-col mt-4 md:mt-0 justify-center items-start ml-4">
                <h2 className="text-xl md:text-2xl font-semibold mb-4 text-primary">
                  {item.title}
                </h2>
                <p className="text-sm text-justify md:text-center text-gray-600 mb-4">
                  {item.description }
                </p>
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
