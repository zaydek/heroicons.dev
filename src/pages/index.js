// import CarbonAds from "./CarbonAds"
import Apply from "lib/x/Apply"
import copyToClipboardPolyfill from "utils/copyToClipboardPolyfill"
import disableAutoCorrect from "lib/x/disableAutoCorrect"
import DocumentTitle from "lib/x/DocumentTitle"
import Reset from "lib/x/Reset"
import SVG from "components/SVG"
import svgToJSX from "utils/svgToJSX"
import target_blank from "lib/x/target_blank"
import Transition from "lib/x/Transition"
import tw from "lib/x/tailwindUnits"
import useHeroiconsReducer from "reducers/useHeroiconsReducer"

import BookOpenSVG from "heroicons-0.4.1/solid/BookOpen"
import CursorClickSVG from "heroicons-0.4.1/solid/CursorClick"
import FlagSVG from "heroicons-0.4.1/solid/Flag"
import XCircleSVG from "heroicons-0.4.1/solid/XCircle"

import DownloadSVG from "heroicons-0.4.1/solid/Download"
import ExternalLinkOutlineSVG from "heroicons-0.4.1/outline/ExternalLink"
import SearchOutlineSVG from "heroicons-0.4.1/outline/Search"
import SunOutlineSVG from "heroicons-0.4.1/outline/Sun"
import SwitchHorizontalOutlineSVG from "heroicons-0.4.1/solid/SwitchHorizontal"

const HEADER_HEIGHT = 560
const HEADER_CLIP_HEIGHT = HEADER_HEIGHT - (60 * 4)

const Header = ({ state, dispatch }) => {
	const [twItsOver9000, setTWItsOver9000] = React.useState(false)
	// const [ghItsOver9000, setGHItsOver9000] = React.useState(false)

	return (
		<header style={{ height: HEADER_HEIGHT /* TODO */ }}>

			{/* Small CTA buttons */}
			<div className="-my-0.5 absolute top-0 left-0 z-10">

				<style>{`

.animate-eyes {
	animation: animate-eyes 700ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes animate-eyes {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.25);
	}
}

.animate-eyes-over-9000 {
	animation: animate-eyes-over-9000 200ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes animate-eyes-over-9000 {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.5);
	}
}

`}
				</style>

				{/* Twitter */}
				<a href="TODO" {...target_blank} onMouseEnter={e => setTWItsOver9000(true)} onMouseLeave={e => setTWItsOver9000(false)}>
					<p className="px-4 py-0.5 pt-4 font-medium no-underline hover:underline text-white">
						<span className="inline-flex flex-row items-center">
							<Apply className="relative w-6 h-6 overflow-visible">
								<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
									<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
									<path fill="#664500" d="M18 21.849c-2.966 0-4.935-.346-7.369-.819-.557-.106-1.638 0-1.638 1.638 0 3.275 3.763 7.369 9.007 7.369s9.007-4.094 9.007-7.369c0-1.638-1.082-1.745-1.638-1.638-2.434.473-4.402.819-7.369.819" />
									{/* <path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" /> */}
									<Apply className={(!twItsOver9000 ? "animate-eyes" : "animate-eyes-over-9000") + " " + "origin-center"}>
										<path fill="#dd2e44" d="M16.65 3.281C15.791.85 13.126-.426 10.694.431c-1.476.52-2.521 1.711-2.928 3.104-1.191-.829-2.751-1.1-4.225-.58C1.111 3.813-.167 6.48.692 8.911c.122.344.284.663.472.958 1.951 3.582 7.588 6.1 11.001 6.131 2.637-2.167 5.446-7.665 4.718-11.677-.038-.348-.113-.698-.233-1.042zm2.7 0C20.209.85 22.875-.426 25.306.431c1.476.52 2.521 1.711 2.929 3.104 1.191-.829 2.751-1.1 4.225-.58 2.43.858 3.707 3.525 2.85 5.956-.123.344-.284.663-.473.958-1.951 3.582-7.588 6.1-11.002 6.131-2.637-2.167-5.445-7.665-4.717-11.677.037-.348.112-.698.232-1.042z" />
									</Apply>
								</svg>
							</Apply>
							<span style={{ width: "1ch" }} />
							<span style={{ opacity: 0.95 }}>
								Share with your followers on Twitter!
							</span>
						</span>
					</p>
				</a>

				{/* GitHub */}
				<a href="TODO" {...target_blank} /* onMouseEnter={e => setGHItsOver9000(true)} onMouseLeave={e => setGHItsOver9000(false)} */>
					<p className="px-4 py-0.5 pb-4 font-medium no-underline hover:underline text-white">
						<span className="inline-flex flex-row items-center">
							<Apply className="w-6 h-6 overflow-visible">
								<svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
									<path fill="#ffcc4d" d="M36 18c0 9.941-8.059 18-18 18S0 27.941 0 18 8.059 0 18 0s18 8.059 18 18" />
									<path fill="#664500" d="M18 21c-3.623 0-6.027-.422-9-1-.679-.131-2 0-2 2 0 4 4.595 9 11 9 6.404 0 11-5 11-9 0-2-1.321-2.132-2-2-2.973.578-5.377 1-9 1z" />
									<path fill="#ffffff" d="M9 22s3 1 9 1 9-1 9-1-2 4-9 4-9-4-9-4z" />
									{/* <Apply className={(!ghItsOver9000 ? "" : "animate-eyes-over-9000") + " " + "origin-center"}> */}
									<path fill="#e95f28" d="M15.682 4.413l-4.542.801L8.8.961C8.542.492 8.012.241 7.488.333c-.527.093-.937.511-1.019 1.039l-.745 4.797-4.542.801c-.535.094-.948.525-1.021 1.064s.211 1.063.703 1.297l4.07 1.932-.748 4.812c-.083.536.189 1.064.673 1.309.179.09.371.133.562.133.327 0 .65-.128.891-.372l3.512-3.561 4.518 2.145c.49.232 1.074.123 1.446-.272.372-.395.446-.984.185-1.459L13.625 9.73l3.165-3.208c.382-.387.469-.977.217-1.459-.254-.482-.793-.743-1.325-.65zm4.636 0l4.542.801L27.2.961c.258-.469.788-.72 1.312-.628.526.093.936.511 1.018 1.039l.745 4.797 4.542.801c.536.094.949.524 1.021 1.063s-.211 1.063-.703 1.297l-4.07 1.932.748 4.812c.083.536-.189 1.064-.673 1.309-.179.09-.371.133-.562.133-.327 0-.65-.128-.891-.372l-3.512-3.561-4.518 2.145c-.49.232-1.074.123-1.446-.272-.372-.395-.446-.984-.185-1.459l2.348-4.267-3.165-3.208c-.382-.387-.469-.977-.217-1.459.255-.482.794-.743 1.326-.65z" />
									{/* </Apply> */}
								</svg>
							</Apply>
							<span style={{ width: "1ch" }} />
							<span style={{ opacity: 0.95 }}>
								Star website on GitHub
							</span>
						</span>
					</p>
				</a>

			</div>

			{/* Background */}
			<div className="absolute top-0 inset-x-0 -z-10" style={{ height: HEADER_HEIGHT - (24 * 4) /* tw(24) */ }}>
				<div id="header-background" className="h-full" style={{ backgroundColor: "hsl(270, 100%, 50%)" }} />
				<div className="absolute top-full inset-x-0">
					<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 50%)" }}>
						<svg
							preserveAspectRatio="none"
							fill="currentColor"
							viewBox="0 0 8 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
						</svg>
					</Apply>
				</div>
			</div>

			{/* Scrolling background */}
			<div className="fixed top-0 inset-x-0 -z-10" style={{ height: tw(24) }}>
				<div id="header-background" className="h-full" style={{ backgroundColor: "hsl(270, 100%, 50%)" }} />
				<div className="absolute top-full inset-x-0">
					<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 50%)" }}>
						<svg
							preserveAspectRatio="none"
							fill="currentColor"
							viewBox="0 0 8 1"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path fillRule="evenodd" clipRule="evenodd" d="M4 0.999999C2 1 0.5 0.333333 0 0L8 -1.39876e-06C7.41667 0.333332 6 0.999999 4 0.999999Z" />
						</svg>
					</Apply>
				</div>
			</div>

			{/* Header */}
			<div className="flex flex-row justify-center items-center h-full">
				{/* NOTE: -mt-* must be nested. */}
				<div className="-mt-36 flex flex-col justify-center items-center h-full">

					<div className="flex flex-row items-center">
						<Apply className="-mb-1 mr-2 w-12 h-12 text-white opacity-50">
							<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
								<path
									clipRule="evenodd"
									d="M2.02345 6.24396C2.06852 5.51956 2.69586 5.00256 3.41667 4.91762C5.41116 4.68257 7.31447 3.9485 8.94977 2.78439C9.57357 2.34032 10.4264 2.34037 11.0501 2.78452C12.686 3.94937 14.5902 4.68381 16.5857 4.91877C17.3054 5.00352 17.9319 5.5192 17.9766 6.24256C17.9922 6.49348 18 6.74639 18 7.00085C18 12.0385 14.8952 16.3511 10.496 18.13C10.1779 18.2586 9.8221 18.2586 9.50401 18.1299C5.10482 16.3501 2 12.0375 2 6.99985C2 6.74589 2.0079 6.49387 2.02345 6.24396Z"
									fillRule="evenodd"
								/>
							</svg>
						</Apply>
						<Apply className="w-auto h-14 text-indigo-50">
							<svg fill="currentColor" viewBox="0 0 234 56" xmlns="http://www.w3.org/2000/svg">
								<path d="M43.2251 47.6722C40.4997 47.6722 38.0731 47.0748 35.9451 45.8802C33.8544 44.6482 32.2117 42.9495 31.0171 40.7842C29.8224 38.6188 29.2251 36.0988 29.2251 33.2242C29.2251 30.3122 29.8037 27.7548 30.9611 25.5522C32.1557 23.3495 33.7984 21.6322 35.8891 20.4002C38.0171 19.1682 40.4811 18.5522 43.2811 18.5522C46.0064 18.5522 48.3771 19.1682 50.3931 20.4002C52.4091 21.5948 53.9771 23.2002 55.0971 25.2162C56.2171 27.2322 56.7771 29.4535 56.7771 31.8802C56.7771 32.2535 56.7584 32.6642 56.7211 33.1122C56.7211 33.5228 56.7024 33.9895 56.6651 34.5122H35.0491C35.2357 37.2002 36.1131 39.2535 37.6811 40.6722C39.2864 42.0535 41.1344 42.7442 43.2251 42.7442C44.9051 42.7442 46.3051 42.3708 47.4251 41.6242C48.5824 40.8402 49.4411 39.7948 50.0011 38.4882H55.9371C55.1904 41.1015 53.6971 43.2855 51.4571 45.0402C49.2544 46.7948 46.5104 47.6722 43.2251 47.6722ZM43.2251 23.4242C41.2464 23.4242 39.4917 24.0215 37.9611 25.2162C36.4304 26.3735 35.4971 28.1282 35.1611 30.4802H50.8411C50.7291 28.3148 49.9637 26.5975 48.5451 25.3282C47.1264 24.0588 45.3531 23.4242 43.2251 23.4242Z" />
								<path d="M60.1362 47.0002V19.2242H65.4562L65.9602 24.4882C66.9309 22.6588 68.2749 21.2215 69.9922 20.1762C71.7469 19.0935 73.8562 18.5522 76.3202 18.5522V24.7682H74.6962C73.0535 24.7682 71.5789 25.0482 70.2722 25.6082C69.0029 26.1308 67.9762 27.0455 67.1922 28.3522C66.4455 29.6215 66.0722 31.3948 66.0722 33.6722V47.0002H60.1362Z" />
								<path d="M90.836 47.6722C88.1854 47.6722 85.796 47.0748 83.668 45.8802C81.5773 44.6482 79.916 42.9495 78.684 40.7842C77.452 38.5815 76.836 36.0242 76.836 33.1122C76.836 30.2002 77.452 27.6615 78.684 25.4962C79.9534 23.2935 81.652 21.5948 83.78 20.4002C85.908 19.1682 88.2787 18.5522 90.892 18.5522C93.5427 18.5522 95.9134 19.1682 98.004 20.4002C100.132 21.5948 101.812 23.2935 103.044 25.4962C104.313 27.6615 104.948 30.2002 104.948 33.1122C104.948 36.0242 104.313 38.5815 103.044 40.7842C101.812 42.9495 100.132 44.6482 98.004 45.8802C95.876 47.0748 93.4867 47.6722 90.836 47.6722ZM90.836 42.5762C92.2547 42.5762 93.5614 42.2215 94.756 41.5122C95.988 40.8028 96.9774 39.7575 97.724 38.3762C98.4707 36.9575 98.844 35.2028 98.844 33.1122C98.844 31.0215 98.4707 29.2855 97.724 27.9042C97.0147 26.4855 96.044 25.4215 94.812 24.7122C93.6174 24.0028 92.3107 23.6482 90.892 23.6482C89.4734 23.6482 88.148 24.0028 86.916 24.7122C85.7213 25.4215 84.7507 26.4855 84.004 27.9042C83.2574 29.2855 82.884 31.0215 82.884 33.1122C82.884 35.2028 83.2574 36.9575 84.004 38.3762C84.7507 39.7575 85.7213 40.8028 86.916 41.5122C88.1107 42.2215 89.4174 42.5762 90.836 42.5762Z" />
								<path d="M111.927 13.9602C110.807 13.9602 109.874 13.6242 109.127 12.9522C108.418 12.2428 108.063 11.3655 108.063 10.3202C108.063 9.27484 108.418 8.41618 109.127 7.74418C109.874 7.03484 110.807 6.68018 111.927 6.68018C113.047 6.68018 113.962 7.03484 114.671 7.74418C115.418 8.41618 115.791 9.27484 115.791 10.3202C115.791 11.3655 115.418 12.2428 114.671 12.9522C113.962 13.6242 113.047 13.9602 111.927 13.9602ZM108.959 47.0002V19.2242H114.895V47.0002H108.959Z" />
								<path d="M133.092 47.6722C130.366 47.6722 127.921 47.0562 125.756 45.8242C123.628 44.5922 121.948 42.8935 120.716 40.7282C119.521 38.5255 118.924 35.9868 118.924 33.1122C118.924 30.2375 119.521 27.7175 120.716 25.5522C121.948 23.3495 123.628 21.6322 125.756 20.4002C127.921 19.1682 130.366 18.5522 133.092 18.5522C136.526 18.5522 139.401 19.4482 141.716 21.2402C144.068 23.0322 145.58 25.4588 146.252 28.5202H140.036C139.662 26.9895 138.841 25.7948 137.572 24.9362C136.302 24.0775 134.809 23.6482 133.092 23.6482C131.636 23.6482 130.292 24.0215 129.06 24.7682C127.828 25.4775 126.838 26.5415 126.092 27.9602C125.345 29.3415 124.972 31.0588 124.972 33.1122C124.972 35.1655 125.345 36.9015 126.092 38.3202C126.838 39.7015 127.828 40.7655 129.06 41.5122C130.292 42.2588 131.636 42.6322 133.092 42.6322C134.809 42.6322 136.302 42.2028 137.572 41.3442C138.841 40.4855 139.662 39.2722 140.036 37.7042H146.252C145.617 40.6908 144.124 43.0988 141.772 44.9282C139.42 46.7575 136.526 47.6722 133.092 47.6722Z" />
								<path d="M162.881 47.6722C160.231 47.6722 157.841 47.0748 155.713 45.8802C153.623 44.6482 151.961 42.9495 150.729 40.7842C149.497 38.5815 148.881 36.0242 148.881 33.1122C148.881 30.2002 149.497 27.6615 150.729 25.4962C151.999 23.2935 153.697 21.5948 155.825 20.4002C157.953 19.1682 160.324 18.5522 162.937 18.5522C165.588 18.5522 167.959 19.1682 170.049 20.4002C172.177 21.5948 173.857 23.2935 175.089 25.4962C176.359 27.6615 176.993 30.2002 176.993 33.1122C176.993 36.0242 176.359 38.5815 175.089 40.7842C173.857 42.9495 172.177 44.6482 170.049 45.8802C167.921 47.0748 165.532 47.6722 162.881 47.6722ZM162.881 42.5762C164.3 42.5762 165.607 42.2215 166.801 41.5122C168.033 40.8028 169.023 39.7575 169.769 38.3762C170.516 36.9575 170.889 35.2028 170.889 33.1122C170.889 31.0215 170.516 29.2855 169.769 27.9042C169.06 26.4855 168.089 25.4215 166.857 24.7122C165.663 24.0028 164.356 23.6482 162.937 23.6482C161.519 23.6482 160.193 24.0028 158.961 24.7122C157.767 25.4215 156.796 26.4855 156.049 27.9042C155.303 29.2855 154.929 31.0215 154.929 33.1122C154.929 35.2028 155.303 36.9575 156.049 38.3762C156.796 39.7575 157.767 40.8028 158.961 41.5122C160.156 42.2215 161.463 42.5762 162.881 42.5762Z" />
								<path d="M180.613 47.0002V19.2242H185.877L186.325 24.0962C187.183 22.3788 188.434 21.0348 190.077 20.0642C191.757 19.0562 193.679 18.5522 195.845 18.5522C199.205 18.5522 201.837 19.5975 203.741 21.6882C205.682 23.7788 206.653 26.8962 206.653 31.0402V47.0002H200.773V31.6562C200.773 26.2802 198.57 23.5922 194.165 23.5922C191.962 23.5922 190.133 24.3762 188.677 25.9442C187.258 27.5122 186.549 29.7522 186.549 32.6642V47.0002H180.613Z" />
								<path d="M221.932 47.6722C218.423 47.6722 215.529 46.8135 213.252 45.0962C210.975 43.3788 209.668 41.1015 209.332 38.2642H215.324C215.623 39.5335 216.332 40.6348 217.452 41.5682C218.572 42.4642 220.047 42.9122 221.876 42.9122C223.668 42.9122 224.975 42.5388 225.796 41.7922C226.617 41.0455 227.028 40.1868 227.028 39.2162C227.028 37.7975 226.449 36.8455 225.292 36.3602C224.172 35.8375 222.604 35.3708 220.588 34.9602C219.02 34.6242 217.452 34.1762 215.884 33.6162C214.353 33.0562 213.065 32.2722 212.02 31.2642C211.012 30.2188 210.508 28.8188 210.508 27.0642C210.508 24.6375 211.441 22.6215 213.308 21.0162C215.175 19.3735 217.788 18.5522 221.148 18.5522C224.247 18.5522 226.748 19.2988 228.652 20.7922C230.593 22.2855 231.732 24.3948 232.068 27.1202H226.356C226.169 25.9255 225.609 24.9922 224.676 24.3202C223.78 23.6482 222.567 23.3122 221.036 23.3122C219.543 23.3122 218.385 23.6295 217.564 24.2642C216.743 24.8615 216.332 25.6455 216.332 26.6162C216.332 27.5868 216.892 28.3522 218.012 28.9122C219.169 29.4722 220.681 29.9762 222.548 30.4242C224.415 30.8348 226.132 31.3202 227.7 31.8802C229.305 32.4028 230.593 33.1868 231.564 34.2322C232.535 35.2775 233.02 36.8082 233.02 38.8242C233.057 41.3628 232.068 43.4722 230.052 45.1522C228.073 46.8322 225.367 47.6722 221.932 47.6722Z" />
								<path d="M0 19.2302V47.0002H5.00951V35.2931H21.0305V47.0002H26.04V19.2302H21.0305V30.4211H5.00951V19.2302H0Z" />
							</svg>
						</Apply>
					</div>

					{/* CTA buttons */}
					<div className="h-8" />
					<div className="space-x-3 flex flex-row">

						{/* Download */}
						<Reset className="block">
							<a href="https://github.com/tailwindlabs/heroicons/archive/v0.4.1.zip">
								<div className="px-4 py-3 bg-indigo-50 rounded-3" style={{ "--bg-opacity": 0.1875 }}>
									<div className="p-1">
										<p className="font-medium text-lg leading-none text-indigo-50">
											<span className="inline-flex flex-row items-center">
												<Apply className="mr-1 w-5 h-5">
													<DownloadSVG />
												</Apply>{" "}
												<span style={{ width: "0.5ch" }} />
												Download All
											</span>
										</p>
									</div>
								</div>
							</a>
						</Reset>

						{/* GitHub */}
						<Reset className="block">
							<a href="https://github.com/tailwindlabs/heroicons" {...target_blank}>
								<div className="px-4 py-3 bg-indigo-50 rounded-3" style={{ "--bg-opacity": 0.1875 }}>
									<div className="p-1">
										<p className="font-medium text-lg leading-none text-indigo-50">
											<span className="inline-flex flex-row items-center">
												<Apply className="mr-1 w-5 h-5">
													<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
													</svg>
													{/* <ExternalLinkOutlineSVG /> */}
												</Apply>{" "}
												<span style={{ width: "0.5ch" }} />
												Open in GitHub
											</span>
										</p>
									</div>
								</div>
							</a>
						</Reset>

					</div>

					<div className="h-12" />
					<div className="space-x-6 flex flex-row">
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
						<div className="px-4 py-3 w-40 h-14 bg-indigo-50 rounded-full" style={{ "--bg-opacity": 0.1875 }} />
					</div>

				</div>
			</div>

		</header>
	)
}

const MemoIcon = React.memo(({ state, dispatch, icon }) => {
	const buttonRef = React.useRef()

	const handleClick = e => {

		// No-op when the user selected buttonRef.current text:
		const selection = document.getSelection()
		if (selection.rangeCount) {
			const range = selection.getRangeAt(0)
			if (!range.collapsed && buttonRef.current.contains(range.startContainer)) {
				// No-op
				return
			}
		}

		try {
			const originalEl = document.getElementById(icon.name)
			const el = originalEl.cloneNode(true)

			el.removeAttribute("id")
			el.classList.remove(...el.classList)
			el.classList.add(...`${icon.name} w-6 h-6`.split(" "))
			el.setAttribute("xmlns", "http://www.w3.org/2000/svg")

			// Remove unsorted attributes:
			const sortedAttrs = [...el.attributes].sort((a, b) => a.name.localeCompare(b.name))
			for (const each of sortedAttrs) {
				el.removeAttributeNode(each)
			}
			// Add sorted attributes:
			for (const each of sortedAttrs) {
				el.setAttributeNode(each)
			}

			copyToClipboardPolyfill(!state.form.copyAsReact ? el.outerHTML : svgToJSX(el.outerHTML))
			buttonRef.current.focus()
		} catch (error) {
			console.error(`copyToClipboardPolyfill: ${error}`)
		}

		const notifType = "icon"
		const notifInfo = {
			name: icon.name,
			icon: icon[!state.form.showOutline ? "solid" : "outline"],
		}
		dispatch({
			type: "UPDATE_NOTIFICATION",
			notifType,
			notifInfo,
		})

	}

	return (
		<Reset className="w-full h-full select-text focus:outline-none">
			<button
				ref={buttonRef}
				className="flex flex-row justify-center items-center bg-white"
				onClick={handleClick}
				aria-label={icon.name}
			>

				{/* New tag */}
				{icon.statusNew && (
					<div className="-m-px absolute top-0 right-0">
						{/* NOTE: Uses -m-px and tw(... + 0.25) to tuck
						the tag in the corner and uses polygon(105% ...)
						to compensate for a rendering bug in Chrome. */}
						<div className="bg-indigo-500" style={{ width: tw(4 + 0.25), height: tw(4 + 0.25), clipPath: "polygon(105% 0, 105% 105%, 0 0)" }} />
					</div>
				)}

				{/* New tag */}
				{/* {icon.statusNew && ( */}
				{/* 	<div className="p-3 absolute top-0 right-0"> */}
				{/* 		<div className="w-3 h-3 bg-indigo-500 rounded-full" /> */}
				{/* 	</div> */}
				{/* )} */}

				{/* SVG */}
				<SVG
					id={icon.name}
					className="w-8 h-8 text-gray-800"
					svg={icon[!state.form.showOutline ? "solid" : "outline"]}
				/>

				{/* Icon name */}
				{/* */}
				{/* TODO */}
				<div className="py-3 absolute bottom-0">
					<p className="text-xs tracking-wide text-gray-600">
						{!state.form.search.safe || state.form.search.safe === "new" ? (
							icon.name
						) : (
							(([substr]) => (
								<>
									{substr}
									<span className="p-px text-black bg-yellow-200 rounded">
										{state.form.search.safe}
									</span>
									{icon.name.slice(substr.length + state.form.search.safe.length)}
								</>
							))(icon.name.split(state.form.search.safe, 1))
						)}
					</p>
				</div>

			</button>
		</Reset>
	)
}, (prev, next) => {
	const ok = (
		prev.state.form === next.state.form &&
		prev.state.dispatch === next.state.dispatch &&
		prev.icon === next.icon
	)
	return ok
})

const Main = ({ state, dispatch }) => {
	const inputRef = React.useRef(null)

	const [inputValue, setInputValue] = React.useState("")
	const [inputFocus, setInputFocus] = React.useState(false)

	React.useEffect(() => {
		inputRef.current.focus()
	}, [])

	// Debounces inputValue (10ms).
	React.useEffect(
		React.useCallback(() => {
			const id = setTimeout(() => {
				const text = inputValue
				dispatch({
					type: "UPDATE_FORM_SEARCH",
					text,
				})
			}, 10)
			return () => {
				clearTimeout(id)
			}
		}, []),
		[inputValue],
	)

	return (
		<div className="flex flex-row items-start">

			{/* LHS */}
			<Apply className="flex-1 z-10">
				<main className="rounded-6 shadow-md">
					<div className="rounded-6 shadow-xl">
						<Apply className="rounded-6 shadow-xs">
							<div className="bg-gray-200">

								{/* <div */}
								{/* 	className="-mb-24 sticky h-24 rounded-t-6 z-10" */}
								{/* 	style={{ */}
								{/* 		top: tw(6), */}
								{/* 		boxShadow: ` */}
								{/* 			0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), */}
								{/* 			0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), */}
								{/* 			0 -${tw(6)} 0 ${tw(6)} hsl(270, 100%, 50%) */}
								{/* 		`, */}
								{/* 		clipPath: "inset(-100% -100% 50% -100%)", */}
								{/* 	}} */}
								{/* /> */}

								<DocumentTitle title={!state.form.search.safe ? "Heroicons" : `Heroicons – ${state.results.length} result${state.results.length !== 1 ? "s" : ""}`}>
									{state.results.length > 0 && (
										<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 rounded-6 overflow-hidden" style={{ gap: 1 }}>
											{state.results.map((each, x) => (
												<div key={each.name} className="relative" style={{ paddingBottom: "100%" }}>
													<div className="absolute inset-0">
														<MemoIcon
															state={state}
															dispatch={dispatch}
															icon={each}
														/>
													</div>
												</div>
											))}
										</div>
									)}
								</DocumentTitle>

								{/* <div */}
								{/* 	className="-mt-24 sticky h-24 rounded-b-6 z-10" */}
								{/* 	style={{ */}
								{/* 		bottom: tw(8), */}
								{/* 		boxShadow: ` */}
								{/* 			0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), */}
								{/* 			0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), */}
								{/* 			0 ${tw(6)} 0 ${tw(6)} var(--white) */}
								{/* 		`, */}
								{/* 		clipPath: "inset(50% -100% -100% -100%)", */}
								{/* 	}} */}
								{/* /> */}

							</div>
						</Apply>
					</div>
				</main>
			</Apply>

			{/* RHS */}
			<div className="w-6" />
			<aside className="sticky" style={{ top: tw(6) }}>
				<div className="rounded-6 shadow-md">
					<div className="rounded-6 shadow-xl">
						<Apply className="rounded-6 shadow-xs">
							<div className="w-96 bg-white">

								{/* Section: Search */}
								<Apply className="relative">
									<section className="flex flex-row h-20">

										{/* LHS */}
										<div className="absolute inset-y-0 left-0 pointer-events-none">
											<div className="px-6 flex flex-row items-center h-full">
												<Apply
													className="w-6 h-6 transform scale-90"
													style={{ color: !inputFocus ? "var(--gray-300)" : "var(--indigo-600)" }}
												>
													<Apply className="transition duration-200 ease-in-out">
														<SearchOutlineSVG />
													</Apply>
												</Apply>
											</div>
										</div>

										{/* Search */}
										<Reset className="w-full h-full leading-none bg-transparent focus:outline-none">
											<input
												ref={inputRef}
												className="px-14 text-lg placeholder-gray-300 text-gray-800"
												type="text"
												placeholder="Search"
												value={inputValue}
												onFocus={e => setInputFocus(true)}
												onBlur={e => setInputFocus(false)}
												onChange={e => setInputValue(e.target.value)}
												autoFocus
												{...disableAutoCorrect}
											/>
										</Reset>

										{/* RHS */}
										{inputValue && (
											<div className="absolute inset-y-0 right-0">
												<Reset className="focus:outline-none">
													<button className="px-6 flex flex-row items-center h-full text-gray-300 hover:text-gray-800 focus:text-gray-800 rounded-tr-6" onClick={e => setInputValue("")}>
														<Apply className="transition duration-200 ease-in-out">
															<Apply className="w-6 h-6 transform scale-90">
																<XCircleSVG />
															</Apply>
														</Apply>
													</button>
												</Reset>
											</div>
										)}

									</section>
								</Apply>

								{/* Section: Copy As */}
								<hr className="border-t border-gray-200" />
								<section className="px-6 py-4">
									<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
										<span className="inline-flex flex-row justify-between w-full">
											<span>
												COPY TO CLIPBOARD
											</span>
											{/* <span> */}
											{/* 	DOWNLOAD */}
											{/* </span> */}
										</span>
									</h6>
									<div className="h-4" />
									<div className="flex flex-row justify-between items-center">
										<div className="space-x-2 flex flex-row">
											<div className="w-10 h-10 bg-gray-100 rounded-full" />
											<div className="w-10 h-10 bg-gray-100 rounded-full" />
											<div className="w-10 h-10 bg-gray-100 rounded-full" />
										</div>
										{/* <div className="w-10 h-10 bg-gray-100 rounded-full" /> */}
									</div>
								</section>

								{/* Section: Size */}
								{/* */}
								{/* TODO: Add overflow-visible. */}
								<hr className="border-t border-gray-200" />
								<section className="px-6 py-4">
									<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
										SIZE
									</h6>
									<div className="h-4" />
									<div className="flex flex-row justify-between items-center">
										<div className="w-64 h-1 bg-gray-100 rounded-full" />
										<div className="w-16 h-8 bg-gray-100 rounded-full" />
									</div>
								</section>
								<hr className="border-t border-gray-200" />
								<section className="px-6 py-4">
									<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
										SIZE
									</h6>
									<div className="h-4" />
									<div className="flex flex-row justify-between items-center">
										<div className="w-64 h-1 bg-gray-100 rounded-full" />
										<div className="w-16 h-8 bg-gray-100 rounded-full" />
									</div>
								</section>
								<hr className="border-t border-gray-200" />
								<section className="px-6 py-4">
									<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
										SIZE
									</h6>
									<div className="h-4" />
									<div className="flex flex-row justify-between items-center">
										<div className="w-64 h-1 bg-gray-100 rounded-full" />
										<div className="w-16 h-8 bg-gray-100 rounded-full" />
									</div>
								</section>
								<hr className="border-t border-gray-200" />
								<section className="px-6 py-4">
									<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}>
										SIZE
									</h6>
									<div className="h-4" />
									<div className="flex flex-row justify-between items-center">
										<div className="w-64 h-1 bg-gray-100 rounded-full" />
										<div className="w-16 h-8 bg-gray-100 rounded-full" />
									</div>
								</section>

								{/* Section: Size */}
								{/* */}
								{/* TODO: Add overflow-visible. */}
								{/* <hr className="border-t border-gray-200" /> */}
								{/* <section className="px-6 py-4"> */}
								{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
								{/* 		CARBON ADS */}
								{/* 	</h6> */}
								{/* 	<div className="h-4" /> */}
								{/* 	<div className="w-80 h-32 bg-gray-100 rounded-2" /> */}
								{/* </section> */}

								{/* Section: Class names */}
								{/* */}
								{/* TODO: Add overflow-visible. */}
								{/* <hr className="border-t border-gray-200" /> */}
								{/* <section className="px-6 py-4"> */}
								{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
								{/* 		CLASS NAMES */}
								{/* 	</h6> */}
								{/* 	<div className="h-4" /> */}
								{/* 	<div className="flex flex-row justify-between items-center"> */}
								{/* 		<div className="w-64 h-1 bg-gray-100 rounded-full" /> */}
								{/* 		<div className="w-16 h-8 bg-gray-100 rounded-full" /> */}
								{/* 	</div> */}
								{/* </section> */}

								{/* Section: Stroke-width */}
								{/* */}
								{/* TODO: Heroicons do not currently export stroke-width as an API. */}
								{/* <hr className="border-t border-gray-200" /> */}
								{/* <section className="px-6 py-6"> */}
								{/* 	<h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
								{/* 		STROKE-WIDTH */}
								{/* 	</h6> */}
								{/* 	<div className="h-4" /> */}
								{/* 	<div className="flex flex-row justify-between items-center"> */}
								{/* 		<div className="w-64 h-1 bg-gray-100 rounded-full" /> */}
								{/* 		<div className="w-16 h-8 bg-gray-100 rounded-full" /> */}
								{/* 	</div> */}
								{/* </section> */}

								{/* <hr className="border-t border-gray-200" /> */}
								<div className="h-4" />

								{/* <div className="h-36" /> */}

								{/* <div */}
								{/* 	className="-mt-24 sticky h-24 rounded-b-6 z-10" */}
								{/* 	style={{ */}
								{/* 		bottom: tw(8), */}
								{/* 		boxShadow: ` */}
								{/* 			0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), */}
								{/* 			0 0 0 1px rgba(0, 0, 0, 0.05), 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04), */}
								{/* 			0 ${tw(6)} 0 ${tw(6)} var(--white) */}
								{/* 		`, */}
								{/* 		clipPath: "inset(50% -100% -100% -100%)", */}
								{/* 	}} */}
								{/* /> */}

							</div>
						</Apply>
					</div>
				</div>

				<section className="px-6 py-12">
					{/* <h6 className="font-bold tracking-wider leading-none text-gray-500" style={{ fontSize: "0.625rem" }}> */}
					{/* 	CARBON ADS */}
					{/* </h6> */}
					{/* <div className="h-4" /> */}
					<div className="-mx-6 flex flex-row justify-center">
						<div className="bg-gray-100 rounded-3" style={{ width: 330, height: 125 }} />
					</div>
				</section>

			</aside>

		</div>
	)
}

const LayoutFragment = () => {
	const [state, dispatch] = useHeroiconsReducer()

	// React.useEffect(
	// 	React.useCallback(() => {
	// 		const id = setTimeout(() => {
	// 			dispatch({
	// 				type: "HIDE_NOTIFICATION",
	// 			})
	// 		}, 2.2e3)
	// 		return () => {
	// 			clearTimeout(id)
	// 		}
	// 	}, [dispatch]),
	// 	[state.notif.showKey],
	// )

	return (
		<>
			<style>{`

/* https://tailwindcss.com/docs/font-family */
html {
	--sans:  system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
	--serif: Georgia, Cambria, "Times New Roman", Times, serif;
	--mono:  Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
}

`}
			</style>
			<section>
				<Header state={state} dispatch={dispatch} />
			</section>
			<section className="-mt-48 px-6 flex flex-row justify-center">
				<div className="w-full z-10" style={{ maxWidth: 1440 }}>
					<Main state={state} dispatch={dispatch} />
				</div>
			</section>
			{/* <div className="h-24" /> */}
		</>
	)
}

export default LayoutFragment
