import { RatingStars } from "./RatingStars";

interface CustomerReviewProps {
  name: string;
  date: string;
  rating: number;
  comment: string;
  avatar: string;
  likes: number;
  dislikes: number;
}

export function CustomerReview({
  name,
  date,
  rating,
  comment,
  avatar,
  likes,
  dislikes,
}: CustomerReviewProps) {
  return (
    <div className="flex flex-col items-start gap-3 self-stretch bg-neutral-50">
      <div className="flex items-center gap-3 self-stretch">
        <img
          className="w-10 h-10 rounded-full"
          src={avatar}
          alt={`${name} profile`}
        />
        <div className="flex flex-col items-start flex-1">
          <div className="flex flex-col items-start self-stretch">
            <div className="self-stretch text-base font-medium leading-6 text-neutral-900">
              {name}
            </div>
          </div>
          <div className="flex flex-col items-start self-stretch">
            <div className="self-stretch text-sm font-normal leading-5 text-neutral-500">
              {date}
            </div>
          </div>
        </div>
      </div>
      <RatingStars rating={rating} size={20} />
      <div className="flex flex-col items-start self-stretch">
        <div className="self-stretch text-base font-normal leading-6 text-neutral-900">
          {comment}
        </div>
      </div>
      <div className="flex items-start gap-9 self-stretch">
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="w-5 flex-1">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-neutral-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.2812 5.25938C16.9252 4.85594 16.4131 4.62489 15.875 4.625H11.5V3.375C11.5 1.64911 10.1009 0.25 8.375 0.25C8.13818 0.24983 7.9216 0.383527 7.81563 0.595312L4.86406 6.5H1.5C0.809644 6.5 0.25 7.05964 0.25 7.75V14.625C0.25 15.3154 0.809644 15.875 1.5 15.875H14.9375C15.8827 15.8753 16.6803 15.1721 16.7984 14.2344L17.7359 6.73438C17.8032 6.20023 17.6375 5.66297 17.2812 5.25938V5.25938ZM1.5 7.75H4.625V14.625H1.5V7.75ZM16.4953 6.57812L15.5578 14.0781C15.5184 14.3907 15.2526 14.6251 14.9375 14.625H5.875V7.27266L8.74297 1.53594C9.61946 1.71136 10.2502 2.48112 10.25 3.375V5.25C10.25 5.59518 10.5298 5.875 10.875 5.875H15.875C16.0544 5.87494 16.2252 5.95198 16.3439 6.08652C16.4626 6.22106 16.5177 6.40012 16.4953 6.57812V6.57812Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="self-stretch text-center text-base font-normal leading-6 text-neutral-500">
              {likes}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <div className="w-5 flex-1">
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="fill-neutral-500"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M17.7359 9.26562L16.7984 1.76562C16.6803 0.827882 15.8827 0.124676 14.9375 0.125H1.5C0.809644 0.125 0.25 0.684644 0.25 1.375V8.25C0.25 8.94036 0.809644 9.5 1.5 9.5H4.86406L7.81563 15.4047C7.9216 15.6165 8.13818 15.7502 8.375 15.75C10.1009 15.75 11.5 14.3509 11.5 12.625V11.375H15.875C16.4132 11.3752 16.9256 11.1441 17.2817 10.7404C17.6378 10.3368 17.8032 9.79964 17.7359 9.26562V9.26562ZM4.625 8.25H1.5V1.375H4.625V8.25ZM16.3438 9.91328C16.2259 10.0489 16.0547 10.1262 15.875 10.125H10.875C10.5298 10.125 10.25 10.4048 10.25 10.75V12.625C10.2502 13.5189 9.61946 14.2886 8.74297 14.4641L5.875 8.72734V1.375H14.9375C15.2526 1.37489 15.5184 1.60929 15.5578 1.92188L16.4953 9.42188C16.519 9.59995 16.4636 9.77949 16.3438 9.91328V9.91328Z"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="self-stretch text-center text-base font-normal leading-6 text-neutral-500">
              {dislikes}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
