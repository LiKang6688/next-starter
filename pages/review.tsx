import axios from "axios";

import { Review } from "@/utilities/mocks/types";

export async function getServerSideProps() {
  const reviewsReq = await axios.get("https://my.backend/reviews", {
    // headers: {
    //   authorization: process.env.API_TOKEN,
    // },
  });

  if (reviewsReq.status === 404) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      reviews: reviewsReq.data,
    },
  };
}

function ReviewPage({ reviews }: { reviews: Review[] }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          {/* <Link href={`/users/${review.author}`} passHref> */}
          <a> {review.text} </a>
          {/* </Link> */}
        </li>
      ))}
    </ul>
  );
}

export default ReviewPage;
