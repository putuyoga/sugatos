import type { IconProps } from "./types";

export default function DateIcon({ size = 20, color = '#333', classNames }: IconProps) {
  return (
    <svg
      className={classNames}
      width={`${size}px`}
      height={`${size}px`}
      viewBox="0 0 32 32"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
    >
      <g id="icomoon-ignore"></g>
      <path
        d="M3.205 3.205v25.59h25.59v-25.59h-25.59zM27.729 4.271v4.798h-23.457v-4.798h23.457zM4.271 27.729v-17.593h23.457v17.593h-23.457z"
        fill={color}
      ></path>
      <path d="M11.201 5.871h1.6v1.599h-1.6v-1.599z" fill={color}></path>
      <path d="M19.199 5.871h1.599v1.599h-1.599v-1.599z" fill={color}></path>
      <path
        d="M12.348 13.929c-0.191 1.297-0.808 1.32-2.050 1.365l-0.193 0.007v0.904h2.104v5.914h1.116v-8.361h-0.953l-0.025 0.171z"
        fill={color}
      ></path>
      <path
        d="M18.642 16.442c-0.496 0-1.005 0.162-1.408 0.433l0.38-1.955h3.515v-1.060h-4.347l-0.848 4.528h0.965l0.059-0.092c0.337-0.525 0.952-0.852 1.606-0.852 1.064 0 1.836 0.787 1.836 1.87 0 0.98-0.615 1.972-1.79 1.972-1.004 0-1.726-0.678-1.756-1.649l-0.006-0.194h-1.115l0.005 0.205c0.036 1.58 1.167 2.641 2.816 2.641 1.662 0 2.963-1.272 2.963-2.895-0-1.766-1.154-2.953-2.872-2.953z"
        fill={color}
      ></path>
    </svg>
  );
}
