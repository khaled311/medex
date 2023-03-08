import * as React from "react";

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={36} height={36} {...props}>
      <path fill="none" d="M0 0h36v36H0z" />
      <path
        d="M30.041 28.185l-4.61-4.492a10.748 10.748 0 10-8.23 3.84 10.637 10.637 0 006.16-1.946l4.659 4.541a1.402 1.402 0 102.021-1.944zM17.201 8.828a7.947 7.947 0 11-7.947 7.947 7.956 7.956 0 017.947-7.947z"
        fill="#fff"
      />
    </svg>
  );
}

const MemoSearch = React.memo(Search);
export default MemoSearch;
