import * as React from "react";

function User(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={36} height={36} {...props}>
      <g data-name="Group 42">
        <path data-name="Rectangle 22" fill="none" d="M0 0h36v36H0z" />
      </g>
      <g data-name="user(1)">
        <g data-name="Group 39">
          <g data-name="Group 38">
            <path
              data-name="Path 19"
              d="M18 19.855c-8.991 0-13.943 4.253-13.943 11.977a1.092 1.092 0 001.092 1.092h25.7a1.092 1.092 0 001.092-1.092c.001-7.723-4.95-11.977-13.941-11.977zM6.281 30.74c.43-5.775 4.367-8.7 11.719-8.7s11.289 2.926 11.719 8.7z"
              fill="#22b0f0"
            />
          </g>
        </g>
        <g data-name="Group 41">
          <g data-name="Group 40">
            <path
              data-name="Path 20"
              d="M17.999 3a7.157 7.157 0 00-7.244 7.39c0 4.336 3.25 7.863 7.244 7.863s7.244-3.527 7.244-7.863A7.158 7.158 0 0017.999 3zm0 13.069c-2.79 0-5.06-2.548-5.06-5.679a4.966 4.966 0 015.06-5.206 5.021 5.021 0 015.06 5.206c0 3.131-2.269 5.679-5.06 5.679z"
              fill="#22b0f0"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

const MemoUser = React.memo(User);
export default MemoUser;
