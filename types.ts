export interface Tag {
  id: number;
  name: string;
}

export interface Quote {
  id: number;
  text: string;
  note: string;
  location: number;
  location_type: string;
  highlighted_at: string;
  url: string | null;
  color: string;
  updated: string;
  book_id: number;
  tags: Tag[];
}

export interface ReadwiseResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Quote[];
}
