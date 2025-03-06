export interface Property {
  id: string;
  name: string;
  address: string;
  description: string;
  region: string;
  city: string;
  country: string;
  zipCode: string;
  size: string;
  type: string;
  numberOfRooms: string;
  furnishing: string;
  legalDocumentAvailability: string;
  thumbnail: {
    secureUrl: string;
  };
  slug: string;
  images: { secureUrl: string; id:string; }[];
  amenities:Amenity[];
  createdAt: string;
  updatedAt: string;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string | null;
}
