import { useEffect, useState } from "react";
import { products } from "../Data/product";

const Homescree = () => {
    const [current, setCurrent] = useState(0);
    const [product, setProduct] = useState(products[0]);

    const categories = ["Fluid Art", "Resin Art", "Wall Painting", "Alcohol Ink Painting", "Abstract Painting"];
    const courses = ["Fluid Art", "Resin Art", "Abstract Painting"];

    useEffect(() => {
        if (products.length === 0) return;

        const interval = setInterval(() => {
            setCurrent((prevCurrent) => {
                const newCurrent = (prevCurrent + 1) % products.length;
                setProduct(products[newCurrent]);
                return newCurrent;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, [products]);

    return (
        <div className="flex flex-col items-center mt-20 w-full h-full mx-4 ">
            <div
                className="bg-contain bg-no-repeat bg-center rounded-2xl p-3 w-4/5 h-80 flex items-center justify-center rounded"
                style={{ backgroundImage: `url(${product.imageUrl})` }}
            >
                <p className="bg-black bg-opacity-70 text-white p-2 rounded text-lg text-center">
                    {product.description}
                </p>
            </div>

            <div className="flex flex-col flex-wrap justify-center items-center ">
                <div className="mx-4 flex flex-col items-center w-[90vw]">
                    <h5>About</h5>
                    <p className="text-center">
                        About Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis dolores ipsa omnis amet perspiciatis, laudantium nostrum. Ut animi quam fuga, cum autem consectetur labore est, nemo libero ipsam quibusdam!
                        Molestiae soluta, ut modi rem dolores asperiores. Maxime, animi atque facilis quidem ab natus accusamus enim excepturi, accusantium architecto voluptatum nostrum, temporibus nemo! Quidem ullam atque, enim nobis quod molestiae!
                        About Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis dolores ipsa omnis amet perspiciatis, laudantium nostrum. Ut animi quam fuga, cum autem consectetur labore est, nemo libero ipsam quibusdam!
                        Molestiae soluta, ut modi rem dolores asperiores. Maxime, animi atque facilis quidem ab natus accusamus enim excepturi, accusantium architecto voluptatum nostrum, temporibus nemo! Quidem ullam atque, enim nobis quod molestiae
                        About Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae corporis dolores ipsa omnis amet perspiciatis, laudantium nostrum. Ut animi quam fuga, cum autem consectetur labore est, nemo libero ipsam quibusdam!
                        Molestiae soluta, ut modi rem dolores asperiores. Maxime, animi atque facilis quidem ab natus accusamus enim excepturi, accusantium architecto voluptatum nostrum, temporibus nemo! Quidem ullam atque, enim nobis quod molestiae
                    </p>
                </div>
                <div className="grid flex-col h-60">
                    <div className="my-4  pb-4">
                        <h2 className="text-4xl text-center mb-2">Art Categories We Deal With</h2>
                        <div className="flex flex-wrap justify-center items-center mb-5 ">
                            {categories.map((item, index) => (
                                <div key={index} className="max-w-sm w-full md:w-1/2 lg:w-1/3 mr-2 mb-2 border rounded-lg">
                                    <div className="p-3">
                                        <img src="/images/img1.jpg" alt={item} className="rounded-lg" />
                                        <div className="mt-2">
                                            <h3 className="text-md">{item}</h3>
                                            <p className="text-sm">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam asperiores nemo numquam incidunt corporis ex aspernatur eos, nostrum dolore voluptas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="my-4  pb-4">
                        <h2 className="text-4xl text-center mb-2">Courses we offer</h2>
                        <div className="flex flex-wrap justify-center items-center mb-5 ">
                            {courses.map((item, index) => (
                                <div key={index} className="max-w-sm w-full md:w-1/2 lg:w-1/3 mr-2 mb-2 border rounded-lg">
                                    <div className="p-3">
                                        <img src="/images/img1.jpg" alt={item} className="rounded-lg" />
                                        <div className="mt-2">
                                            <h3 className="text-md">{item}</h3>
                                            <p className="text-sm">
                                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam asperiores nemo numquam incidunt corporis ex aspernatur eos, nostrum dolore voluptas.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>

               
            </div>
        </div>
    );
};

export default Homescree;
