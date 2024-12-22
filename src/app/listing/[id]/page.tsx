import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageSlider from "@/app/components/imageSlider/ImageSlider";

const SinglePage = () => {
  return (
    <div className="min-h-screen bg-[#f5f8fa] p-6">
      <div className="max-w-6xl mx-auto">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-500 mb-4">
          <span>Logo</span> / <span>Kota</span> / <span>Okazaki House</span>
        </nav>

        {/* Page Header */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-6">
          <div className="w-full lg:w-2/3">
            <div className="flex justify-between">
              <h1 className="text-3xl font-bold">Okazaki House</h1>
              <Button variant={"outline"}>Male</Button>{" "}
            </div>
            <p className="text-gray-600">
              C-193 Near M Block Market Gate No 3, Greater Kailash-1, Delhi
            </p>
            {/* Image Slider */}
            <ImageSlider/>
          </div>

          <div className="flex flex-col w-full max-w-md bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between gap-2">
              <Button variant="secondary" className="w-1/2">
                Schedule a Visit
              </Button>
              <Button className="w-1/2">Reserve Now</Button>
            </div>
            <form className="mt-4 space-y-4">
              <Input type="text" placeholder="Name" className="w-full" />
              <Input
                type="tel"
                placeholder="Mobile Number"
                className="w-full"
              />
              <div className="flex items-center gap-2">
                <Switch id="whatsapp-updates" />
                <label
                  htmlFor="whatsapp-updates"
                  className="text-sm text-gray-600"
                >
                  Get updates over WhatsApp
                </label>
              </div>
              <div className="flex items-start gap-2">
                <Checkbox id="terms" />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I have read and agreed to the{" "}
                  <a href="#" className="text-blue-600">
                    terms and conditions
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600">
                    privacy policy
                  </a>
                </label>
              </div>
              <Button className="w-full">Schedule a Visit</Button>
            </form>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8">
          {/* Pricing and Details */}
          <div className="mt-6">
            <h2 className="text-2xl font-semibold">Starts from</h2>
            <p className="text-xl text-gray-800 font-bold">₹18,000/mo*</p>
            <p className="text-sm text-gray-500 mt-1">
              *Denotes starting price inclusive of taxes. Final prices may vary
              based on room occupancy, customized services, and additional
              attributes.
            </p>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="occupancy" className="mt-6">
            <TabsList>
              <TabsTrigger value="occupancy">Occupancy</TabsTrigger>
              <TabsTrigger value="amenities">Amenities</TabsTrigger>
              <TabsTrigger value="details">Details</TabsTrigger>
            </TabsList>

            <TabsContent value="occupancy">
              <h3 className="text-lg font-medium mt-4">
                Available Occupancies
              </h3>
              <ul className="mt-2 space-y-2">
                <li className="flex justify-between">
                  <span>Single Occupancy</span>
                  <span>₹24,000/mo*</span>
                </li>
                <li className="flex justify-between">
                  <span>Double Occupancy</span>
                  <span>₹18,000/mo*</span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="amenities">
              <h3 className="text-lg font-medium mt-4">Amenities & Services</h3>
              <ul className="mt-2 grid grid-cols-2 gap-4">
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Air Conditioning</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>High-speed WiFi</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Attached Washroom</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Laundry Service</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Spacious Cupboard</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-4 h-4 bg-green-500 rounded-full"></span>
                  <span>Hot Water Supply</span>
                </li>
              </ul>
            </TabsContent>

            <TabsContent value="details">
              <h3 className="text-lg font-medium mt-4">Property Details</h3>
              <p className="text-sm text-gray-600 mt-2">
                Details content goes here...
              </p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
