import * as React from "react";

function Cart(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={36} height={36} data-prefix="fal" {...props}>
      <g data-name="Group 1307">
        <path data-name="Rectangle 22" fill="none" d="M0 0h36v36H0z" />
        <path
          d="M29.23 25.131a1.073 1.073 0 010 2.147H12.459a3.1 3.1 0 01-3.017-2.718L7.691 12.208l-1-5.775a1.011 1.011 0 00-.927-.879H4.449a1.074 1.074 0 010-2.148h1.315a3.121 3.121 0 013.05 2.716l1 5.752 1.754 12.406a.969.969 0 00.891.851zm2.4-17.683a3.4 3.4 0 01.769 2.67l-1.627 9.323a3.071 3.071 0 01-3.008 2.664L13.83 23.137a1.076 1.076 0 01-.89-1.772 1.055 1.055 0 01.732-.369l14.011-1.036a1 1 0 00.967-.835l1.624-9.322a1.245 1.245 0 00-.253-.934.6.6 0 00-.466-.214H11.676a1.074 1.074 0 010-2.148h17.88a2.731 2.731 0 012.07.939zm-18.9 25a2.109 2.109 0 112.051-2.108 2.108 2.108 0 01-2.055 2.114zm14.457 0a2.109 2.109 0 112.051-2.108 2.109 2.109 0 01-2.055 2.114z"
          fill="#f9ba32"
        />
      </g>
    </svg>
  );
}

const MemoCart = React.memo(Cart);
export default MemoCart;
