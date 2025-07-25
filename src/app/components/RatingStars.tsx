interface RatingStarsProps {
  rating: number;
  size?: number;
  showHalfStars?: boolean;
}

export function RatingStars({
  rating,
  size = 18,
  showHalfStars = false,
}: RatingStarsProps) {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = showHalfStars && rating % 1 >= 0.5;

  // Full stars
  for (let i = 0; i < fullStars; i++) {
    stars.push(
      <div key={`full-${i}`} className="flex flex-col items-start">
        <div className="w-[18px] flex-1">
          <svg
            style={{ width: `${size}px`, height: `${size}px` }}
            className="fill-neutral-900"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.4883 7.04234L12.3172 9.80984L13.2671 13.9302C13.3699 14.3705 13.199 14.8296 12.8333 15.0956C12.4676 15.3616 11.9782 15.3828 11.5909 15.1494L7.99719 12.9697L4.41125 15.1494C4.02394 15.3828 3.53452 15.3616 3.16882 15.0956C2.80312 14.8296 2.63223 14.3705 2.735 13.9302L3.68352 9.81406L0.511719 7.04234C0.168718 6.74652 0.036581 6.27384 0.176449 5.84303C0.316317 5.41222 0.700908 5.1073 1.15227 5.06938L5.33305 4.70727L6.965 0.814766C7.13926 0.397124 7.54746 0.12514 8 0.12514C8.45254 0.12514 8.86074 0.397124 9.035 0.814766V0.814766L10.6719 4.70727L14.8512 5.06938C15.3026 5.1073 15.6872 5.41222 15.8271 5.84303C15.9669 6.27384 15.8348 6.74652 15.4918 7.04234H15.4883Z"
            />
          </svg>
        </div>
      </div>,
    );
  }

  // Half star
  if (hasHalfStar) {
    stars.push(
      <div key="half" className="flex flex-col items-start">
        <div className="w-[18px] flex-1">
          <svg
            style={{ width: `${size}px`, height: `${size}px` }}
            className="fill-neutral-900"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8188 5.8407C15.6795 5.41148 15.2972 5.107 14.8477 5.06727L10.6719 4.70727L9.035 0.814766V0.814766C8.86074 0.397124 8.45254 0.12514 8 0.12514C7.54746 0.12514 7.13926 0.397124 6.965 0.814766L5.33305 4.70727L1.15227 5.06938C0.700908 5.1073 0.316317 5.41222 0.176449 5.84303C0.036581 6.27384 0.168718 6.74652 0.511719 7.04234L3.68352 9.81406L2.73289 13.9302C2.63012 14.3705 2.80102 14.8296 3.16672 15.0956C3.53241 15.3616 4.02183 15.3828 4.40914 15.1494L7.99508 12.9697L11.5887 15.1494C11.9761 15.3828 12.4655 15.3616 12.8312 15.0956C13.1969 14.8296 13.3678 14.3705 13.265 13.9302L12.3151 9.80984L15.4862 7.04234C15.8292 6.74548 15.9603 6.27167 15.8188 5.8407V5.8407ZM14.7486 6.19227L11.5775 8.95977C11.263 9.23335 11.1255 9.65843 11.2203 10.0644L12.173 14.1875V14.1875L8.58219 12.0078C8.22504 11.7903 7.77637 11.7903 7.41922 12.0078L3.83328 14.1875V14.1875L4.77969 10.0672C4.87447 9.66124 4.73702 9.23617 4.4225 8.96258L1.25 6.19648C1.24974 6.19438 1.24974 6.19226 1.25 6.19016L5.42938 5.82875C5.84523 5.7921 6.20659 5.52818 6.36805 5.1432L8 1.25563L9.63125 5.1432C9.79271 5.52818 10.1541 5.7921 10.5699 5.82875L14.75 6.19016C14.75 6.19016 14.75 6.19437 14.75 6.19508L14.7486 6.19227Z"
            />
          </svg>
        </div>
      </div>,
    );
  }

  // Empty stars
  const remainingStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
  for (let i = 0; i < remainingStars; i++) {
    stars.push(
      <div key={`empty-${i}`} className="flex flex-col items-start">
        <div className="w-[18px] flex-1">
          <svg
            style={{ width: `${size}px`, height: `${size}px` }}
            className="fill-neutral-300"
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.8188 5.8407C15.6795 5.41148 15.2972 5.107 14.8477 5.06727L10.6719 4.70727L9.035 0.814766V0.814766C8.86074 0.397124 8.45254 0.12514 8 0.12514C7.54746 0.12514 7.13926 0.397124 6.965 0.814766L5.33305 4.70727L1.15227 5.06938C0.700908 5.1073 0.316317 5.41222 0.176449 5.84303C0.036581 6.27384 0.168718 6.74652 0.511719 7.04234L3.68352 9.81406L2.73289 13.9302C2.63012 14.3705 2.80102 14.8296 3.16672 15.0956C3.53241 15.3616 4.02183 15.3828 4.40914 15.1494L7.99508 12.9697L11.5887 15.1494C11.9761 15.3828 12.4655 15.3616 12.8312 15.0956C13.1969 14.8296 13.3678 14.3705 13.265 13.9302L12.3151 9.80984L15.4862 7.04234C15.8292 6.74548 15.9603 6.27167 15.8188 5.8407V5.8407ZM14.7486 6.19227L11.5775 8.95977C11.263 9.23335 11.1255 9.65843 11.2203 10.0644L12.173 14.1875V14.1875L8.58219 12.0078C8.22504 11.7903 7.77637 11.7903 7.41922 12.0078L3.83328 14.1875V14.1875L4.77969 10.0672C4.87447 9.66124 4.73702 9.23617 4.4225 8.96258L1.25 6.19648C1.24974 6.19438 1.24974 6.19226 1.25 6.19016L5.42938 5.82875C5.84523 5.7921 6.20659 5.52818 6.36805 5.1432L8 1.25563L9.63125 5.1432C9.79271 5.52818 10.1541 5.7921 10.5699 5.82875L14.75 6.19016C14.75 6.19016 14.75 6.19437 14.75 6.19508L14.7486 6.19227Z"
            />
          </svg>
        </div>
      </div>,
    );
  }

  return <div className="flex items-start gap-0.5">{stars}</div>;
}
