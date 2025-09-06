// Basic types for the frontend application
export interface ServiceData {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ProjectData {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ClientData {
  id: string;
  name: string;
  logo: string;
  website?: string;
}