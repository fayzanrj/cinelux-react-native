interface TicketsProps {
  _id: string;
  movie: {
    title: string;
    poster_path: string;
  };
  bookingNumber: number;
  status: "paymentFailed" | "verified" | "paymentRequired";
  customerName: string;
  customerEmail: string;
  showtimeId: string;
  date: string;
  time: string;
  language: string;
  screen: string;
  seats: string[];
  isPaid: boolean;
  createdAt: Date;
  updatedAt: Date;
  paymentSessionId: string;
}

export default TicketsProps;
