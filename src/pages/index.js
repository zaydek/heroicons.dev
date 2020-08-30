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

import BeakerSVG from "heroicons-0.4.1/solid/Beaker"
import BookOpenSVG from "heroicons-0.4.1/solid/BookOpen"
import CursorClickSVG from "heroicons-0.4.1/solid/CursorClick"
import DownloadSVG from "heroicons-0.4.1/solid/Download"
import ExternalLinkSVG from "heroicons-0.4.1/solid/ExternalLink"
import FlagSVG from "heroicons-0.4.1/solid/Flag"
import XCircleSVG from "heroicons-0.4.1/solid/XCircle"

import ExternalLinkOutlineSVG from "heroicons-0.4.1/outline/ExternalLink"
import ScaleOutlineSVG from "heroicons-0.4.1/outline/Scale"
import SearchOutlineSVG from "heroicons-0.4.1/outline/Search"
import SunOutlineSVG from "heroicons-0.4.1/outline/Sun"

const HEADER_HEIGHT = 640

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
	animation: animate-eyes-over-9000 300ms cubic-bezier(0.4, 0, 0.2, 1) infinite;
}

@keyframes animate-eyes-over-9000 {
	0%, 100% {
		transform: scale(1);
	}
	50% {
		transform: scale(1.375);
	}
}

`}
				</style>

				{/* Twitter */}
				<a href="TODO" {...target_blank} onMouseEnter={e => setTWItsOver9000(true)} onMouseLeave={e => setTWItsOver9000(false)}>
					<p className="whitespace-pre px-4 py-0.5 pt-4 font-medium no-underline hover:underline text-indigo-50">
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
							{/* <span> */}
							Share with your followers on Twitter!
							{/* </span> */}
						</span>
					</p>
				</a>

				{/* GitHub */}
				<a href="TODO" {...target_blank} /* onMouseEnter={e => setGHItsOver9000(true)} onMouseLeave={e => setGHItsOver9000(false)} */>
					<p className="whitespace-pre px-4 py-0.5 pb-4 font-medium no-underline hover:underline text-indigo-50">
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
							{/* <span> */}
							Star website on GitHub
							{/* </span> */}
						</span>
					</p>
				</a>

			</div>

			{/* Background */}
			<div className="absolute top-0 inset-x-0 -z-10" style={{ height: HEADER_HEIGHT - (24 * 4) /* tw(24) */ }}>
				<div className="h-full" style={{ backgroundColor: "hsl(270, 100%, 47.5%)" }} />
				{/* <div className="h-full" style={{ backgroundImage: "radial-gradient(ellipse at top right, hsl(265, 100%, 65%) -25%, hsl(270, 100%, 45%))" }} /> */}
				<div className="absolute top-full inset-x-0">
					<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 47.5%)" }}>
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

			{/* Background (scroll) */}
			<div className="fixed top-0 inset-x-0 -z-10" style={{ height: tw(24) }}>
				<div className="h-full" style={{ backgroundColor: "hsl(270, 100%, 47.5%)" }} />
				<div className="absolute top-full inset-x-0">
					<Apply className="w-full h-24" style={{ color: "hsl(270, 100%, 47.5%)" }}>
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
				<div className="-mt-52 flex flex-col justify-center items-center h-full">

					<Apply className="relative">
						<div className="flex flex-row items-center">
							<Apply className="w-auto h-14 text-indigo-50">
								<svg fill="currentColor" viewBox="0 0 240 56" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd" d="M23.856 19.2222V30.4883H9.68802V19.2241H3.75201V30.4883V34.5203V47.0001H9.68802V34.5203H23.856V46.9982H29.792V34.5203V30.4883V19.2222H23.856Z" />
									<path d="M46.9706 47.6722C44.2453 47.6722 41.8186 47.0748 39.6906 45.8802C37.5999 44.6482 35.9572 42.9495 34.7626 40.7842C33.5679 38.6188 32.9706 36.0988 32.9706 33.2242C32.9706 30.3122 33.5492 27.7548 34.7066 25.5522C35.9012 23.3495 37.5439 21.6322 39.6346 20.4002C41.7626 19.1682 44.2266 18.5522 47.0266 18.5522C49.7519 18.5522 52.1226 19.1682 54.1386 20.4002C56.1546 21.5948 57.7226 23.2002 58.8426 25.2162C59.9626 27.2322 60.5226 29.4535 60.5226 31.8802C60.5226 32.2535 60.5039 32.6642 60.4666 33.1122C60.4666 33.5228 60.4479 33.9895 60.4106 34.5122H38.7946C38.9812 37.2002 39.8586 39.2535 41.4266 40.6722C43.0319 42.0535 44.8799 42.7442 46.9706 42.7442C48.6506 42.7442 50.0506 42.3708 51.1706 41.6242C52.3279 40.8402 53.1866 39.7948 53.7466 38.4882H59.6826C58.9359 41.1015 57.4426 43.2855 55.2026 45.0402C52.9999 46.7948 50.2559 47.6722 46.9706 47.6722ZM46.9706 23.4242C44.9919 23.4242 43.2372 24.0215 41.7066 25.2162C40.1759 26.3735 39.2426 28.1282 38.9066 30.4802H54.5866C54.4746 28.3148 53.7093 26.5975 52.2906 25.3282C50.8719 24.0588 49.0986 23.4242 46.9706 23.4242Z" />
									<path d="M63.8817 47.0002V19.2242H69.2017L69.7057 24.4882C70.6764 22.6588 72.0204 21.2215 73.7377 20.1762C75.4924 19.0935 77.6017 18.5522 80.0657 18.5522V24.7682H78.4417C76.799 24.7682 75.3244 25.0482 74.0177 25.6082C72.7484 26.1308 71.7217 27.0455 70.9377 28.3522C70.191 29.6215 69.8177 31.3948 69.8177 33.6722V47.0002H63.8817Z" />
									<path d="M94.5815 47.6722C91.9309 47.6722 89.5415 47.0748 87.4135 45.8802C85.3229 44.6482 83.6615 42.9495 82.4295 40.7842C81.1975 38.5815 80.5815 36.0242 80.5815 33.1122C80.5815 30.2002 81.1975 27.6615 82.4295 25.4962C83.6989 23.2935 85.3975 21.5948 87.5255 20.4002C89.6535 19.1682 92.0242 18.5522 94.6375 18.5522C97.2882 18.5522 99.6589 19.1682 101.75 20.4002C103.878 21.5948 105.558 23.2935 106.79 25.4962C108.059 27.6615 108.694 30.2002 108.694 33.1122C108.694 36.0242 108.059 38.5815 106.79 40.7842C105.558 42.9495 103.878 44.6482 101.75 45.8802C99.6215 47.0748 97.2322 47.6722 94.5815 47.6722ZM94.5815 42.5762C96.0002 42.5762 97.3069 42.2215 98.5015 41.5122C99.7335 40.8028 100.723 39.7575 101.47 38.3762C102.216 36.9575 102.59 35.2028 102.59 33.1122C102.59 31.0215 102.216 29.2855 101.47 27.9042C100.76 26.4855 99.7895 25.4215 98.5575 24.7122C97.3629 24.0028 96.0562 23.6482 94.6375 23.6482C93.2189 23.6482 91.8935 24.0028 90.6615 24.7122C89.4669 25.4215 88.4962 26.4855 87.7495 27.9042C87.0029 29.2855 86.6295 31.0215 86.6295 33.1122C86.6295 35.2028 87.0029 36.9575 87.7495 38.3762C88.4962 39.7575 89.4669 40.8028 90.6615 41.5122C91.8562 42.2215 93.1629 42.5762 94.5815 42.5762Z" />
									<path d="M115.673 13.9602C114.553 13.9602 113.62 13.6242 112.873 12.9522C112.164 12.2428 111.809 11.3655 111.809 10.3202C111.809 9.27484 112.164 8.41618 112.873 7.74418C113.62 7.03484 114.553 6.68018 115.673 6.68018C116.793 6.68018 117.708 7.03484 118.417 7.74418C119.164 8.41618 119.537 9.27484 119.537 10.3202C119.537 11.3655 119.164 12.2428 118.417 12.9522C117.708 13.6242 116.793 13.9602 115.673 13.9602ZM112.705 47.0002V19.2242H118.641V47.0002H112.705Z" />
									<path d="M136.837 47.6722C134.112 47.6722 131.666 47.0562 129.501 45.8242C127.373 44.5922 125.693 42.8935 124.461 40.7282C123.266 38.5255 122.669 35.9868 122.669 33.1122C122.669 30.2375 123.266 27.7175 124.461 25.5522C125.693 23.3495 127.373 21.6322 129.501 20.4002C131.666 19.1682 134.112 18.5522 136.837 18.5522C140.272 18.5522 143.146 19.4482 145.461 21.2402C147.813 23.0322 149.325 25.4588 149.997 28.5202H143.781C143.408 26.9895 142.586 25.7948 141.317 24.9362C140.048 24.0775 138.554 23.6482 136.837 23.6482C135.381 23.6482 134.037 24.0215 132.805 24.7682C131.573 25.4775 130.584 26.5415 129.837 27.9602C129.09 29.3415 128.717 31.0588 128.717 33.1122C128.717 35.1655 129.09 36.9015 129.837 38.3202C130.584 39.7015 131.573 40.7655 132.805 41.5122C134.037 42.2588 135.381 42.6322 136.837 42.6322C138.554 42.6322 140.048 42.2028 141.317 41.3442C142.586 40.4855 143.408 39.2722 143.781 37.7042H149.997C149.362 40.6908 147.869 43.0988 145.517 44.9282C143.165 46.7575 140.272 47.6722 136.837 47.6722Z" />
									<path d="M166.627 47.6722C163.976 47.6722 161.587 47.0748 159.459 45.8802C157.368 44.6482 155.707 42.9495 154.475 40.7842C153.243 38.5815 152.627 36.0242 152.627 33.1122C152.627 30.2002 153.243 27.6615 154.475 25.4962C155.744 23.2935 157.443 21.5948 159.571 20.4002C161.699 19.1682 164.069 18.5522 166.683 18.5522C169.333 18.5522 171.704 19.1682 173.795 20.4002C175.923 21.5948 177.603 23.2935 178.835 25.4962C180.104 27.6615 180.739 30.2002 180.739 33.1122C180.739 36.0242 180.104 38.5815 178.835 40.7842C177.603 42.9495 175.923 44.6482 173.795 45.8802C171.667 47.0748 169.277 47.6722 166.627 47.6722ZM166.627 42.5762C168.045 42.5762 169.352 42.2215 170.547 41.5122C171.779 40.8028 172.768 39.7575 173.515 38.3762C174.261 36.9575 174.635 35.2028 174.635 33.1122C174.635 31.0215 174.261 29.2855 173.515 27.9042C172.805 26.4855 171.835 25.4215 170.603 24.7122C169.408 24.0028 168.101 23.6482 166.683 23.6482C165.264 23.6482 163.939 24.0028 162.707 24.7122C161.512 25.4215 160.541 26.4855 159.795 27.9042C159.048 29.2855 158.675 31.0215 158.675 33.1122C158.675 35.2028 159.048 36.9575 159.795 38.3762C160.541 39.7575 161.512 40.8028 162.707 41.5122C163.901 42.2215 165.208 42.5762 166.627 42.5762Z" />
									<path d="M184.358 47.0002V19.2242H189.622L190.07 24.0962C190.929 22.3788 192.18 21.0348 193.822 20.0642C195.502 19.0562 197.425 18.5522 199.59 18.5522C202.95 18.5522 205.582 19.5975 207.486 21.6882C209.428 23.7788 210.398 26.8962 210.398 31.0402V47.0002H204.518V31.6562C204.518 26.2802 202.316 23.5922 197.91 23.5922C195.708 23.5922 193.878 24.3762 192.422 25.9442C191.004 27.5122 190.294 29.7522 190.294 32.6642V47.0002H184.358Z" />
									<path d="M225.678 47.6722C222.168 47.6722 219.275 46.8135 216.998 45.0962C214.72 43.3788 213.414 41.1015 213.078 38.2642H219.07C219.368 39.5335 220.078 40.6348 221.198 41.5682C222.318 42.4642 223.792 42.9122 225.622 42.9122C227.414 42.9122 228.72 42.5388 229.542 41.7922C230.363 41.0455 230.774 40.1868 230.774 39.2162C230.774 37.7975 230.195 36.8455 229.038 36.3602C227.918 35.8375 226.35 35.3708 224.334 34.9602C222.766 34.6242 221.198 34.1762 219.63 33.6162C218.099 33.0562 216.811 32.2722 215.766 31.2642C214.758 30.2188 214.254 28.8188 214.254 27.0642C214.254 24.6375 215.187 22.6215 217.054 21.0162C218.92 19.3735 221.534 18.5522 224.894 18.5522C227.992 18.5522 230.494 19.2988 232.398 20.7922C234.339 22.2855 235.478 24.3948 235.814 27.1202H230.102C229.915 25.9255 229.355 24.9922 228.422 24.3202C227.526 23.6482 226.312 23.3122 224.782 23.3122C223.288 23.3122 222.131 23.6295 221.31 24.2642C220.488 24.8615 220.078 25.6455 220.078 26.6162C220.078 27.5868 220.638 28.3522 221.758 28.9122C222.915 29.4722 224.427 29.9762 226.294 30.4242C228.16 30.8348 229.878 31.3202 231.446 31.8802C233.051 32.4028 234.339 33.1868 235.31 34.2322C236.28 35.2775 236.766 36.8082 236.766 38.8242C236.803 41.3628 235.814 43.4722 233.798 45.1522C231.819 46.8322 229.112 47.6722 225.678 47.6722Z" />
								</svg>
							</Apply>
							<div className="absolute inset-y-0 left-full" style={{ paddingTop: 5 }}>
								<Apply className="w-12 h-12 text-indigo-50 opacity-50">
									<svg fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<FlagSVG />
									</svg>
								</Apply>
							</div>
						</div>
					</Apply>

					<div className="h-4" />
					<h2 className="text-center font-medium text-lg leading-none text-indigo-50">
						<span className="inline-flex flex-row items-center">
							<Apply className="-mt-px w-4 h-4">
								<ScaleOutlineSVG />
							</Apply>{" "}
							<span style={{ width: "0.25ch" }} />
							MIT icons by{" "}
							<span style={{ width: "0.25ch" }} />
							<span className="font-semibold no-underline hover:underline">
								@steveschoger
							</span>{". "}
							Third-party site by{" "}
							<span style={{ width: "0.25ch" }} />
							<span className="font-semibold no-underline hover:underline">
								@username_ZAYDEK
							</span>.
						</span>
					</h2>
					{/* <h3 className="font-semibold !text-xl leading-none text-indigo-50"> */}
					{/* 	Website by @username_ZAYDEK */}
					{/* </h3> */}

					{/* CTA buttons */}
					<div className="h-8" />
					<div className="space-x-3 flex flex-row">

						{/* Download */}
						<Reset className="block">
							<a href="https://github.com/tailwindlabs/heroicons/archive/v0.4.1.zip">
								<div className="px-4 py-3 bg-indigo-50 rounded-3" style={{ "--bg-opacity": 0.1875 }}>
									<div className="p-1">
										<p className="whitespace-pre font-medium text-lg leading-none text-indigo-50">
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
										<p className="whitespace-pre font-medium text-lg leading-none text-indigo-50">
											<span className="inline-flex flex-row items-center">
												<Apply className="mr-1 w-5 h-5">
													<svg fill="currentColor" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
														<path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
													</svg>
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

					<div className="h-16" />
					<div className="relative">
						<div className="pb-4 absolute bottom-full left-0">
							<h6 className="font-bold text-xs tracking-wider leading-none text-indigo-50 opacity-75">
								<span className="inline-flex flex-row items-center">
									OUR SPONSORS &middot; BECOME A SPONSOR{" "}
									<span style={{ width: "0.25ch" }} />
									<Apply className="w-3 h-3 transform scale-110" style={{ marginTop: -2 }}>
										<ExternalLinkSVG />
									</Apply>
								</span>
							</h6>
						</div>
						<div className="pb-4 absolute bottom-full right-0">
							<h6 className="font-bold text-xs tracking-wider leading-none text-indigo-50 opacity-75">
								<span className="inline-flex flex-row items-center">
									UNAFFILIATED WITH TAILWIND LABS{" "}
									<span style={{ width: "0.25ch" }} />
									<Apply className="w-3 h-3 transform scale-110" style={{ marginTop: -2 }}>
										<BeakerSVG />
									</Apply>
								</span>
							</h6>
						</div>
						<div className="-mx-3 -my-2 flex flex-row flex-wrap">
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“10x Browser Tests”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“Landing Page Ebook”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“Resumé Optimizer”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“Laravel Softwarehouse”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“Download 30,000 Icons”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
							<Apply className="relative">
								<div
									className="mx-3 my-2 px-4 py-3 h-14 bg-indigo-50 rounded-full"
									style={{
										"--bg-opacity": 0.1875,
										width: 128 + Math.floor(Math.random() * (192 - 128)),
									}}
								>
									<div className="pt-2 absolute top-full inset-x-0 flex flex-row justify-center">
										<p className="whitespace-pre font-medium text-xs leading-none text-indigo-50 opacity-75">
											<span className="inline-flex flex-row items-center">
												“Spell Checker for Figma”{" "}
												<Apply className="w-3 h-3 opacity-75">
													<ExternalLinkSVG />
												</Apply>
											</span>
										</p>
									</div>
								</div>
							</Apply>
						</div>
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
				{false && (
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

				{/* New tag */}
				{icon.statusNew && (
					<div className="p-3 absolute top-0 right-0">
						<div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
					</div>
				)}

				{/* {icon.statusNew && ( */}
				{/* 	<div className="p-3 absolute top-0 right-0"> */}
				{/* 		<div className="w-2 h-2 bg-indigo-500 rounded-full animate-ping" /> */}
				{/* 	</div> */}
				{/* )} */}

				{/* SVG */}
				<SVG
					id={icon.name}
					className="w-8 h-8 text-gray-700"
					svg={icon[!state.form.showOutline ? "solid" : "outline"]}
				/>

				{/* Icon name */}
				{/* */}
				{/* TODO */}
				<div className="py-3 absolute bottom-0">
					<p className="whitespace-pre text-xs tracking-wide text-gray-600">
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
			{/* */}
			{/* TODO: mb-* */}
			<Apply className="mb-24 flex-1 z-10">
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
								{/* 			0 -${tw(6)} 0 ${tw(6)} hsl(270, 100%, 47.5%) */}
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
												// style={{ boxShadow: "0 0 0 3px var(--indigo-400)" }}
												type="text"
												placeholder="Try searching ‘new’"
												value={inputValue}
												onFocus={e => setInputFocus(true)}
												onBlur={e => setInputFocus(false)}
												onChange={e => setInputValue(e.target.value)}
												autoFocus
												{...disableAutoCorrect}
											/>
										</Reset>

										{inputFocus && (
											<div className="absolute inset-y-0 right-0">
												<div className="px-10 flex flex-row items-center h-full text-gray-300 hover:text-gray-800 focus:text-gray-800 rounded-tr-6" onClick={e => setInputValue("")}>
													{/* <Apply className="transition duration-200 ease-in-out"> */}
														{/* <Apply className="w-6 h-6 transform scale-90"> */}
															<div className="w-4 h-4 bg-indigo-500 rounded-full animate-ping" />
														{/* </Apply> */}
													{/* </Apply> */}
												</div>
											</div>
										)}

										{/* RHS */}
										{/* {inputValue && ( */}
										{/* 	<div className="absolute inset-y-0 right-0"> */}
										{/* 		<Reset className="focus:outline-none"> */}
										{/* 			<button className="px-6 flex flex-row items-center h-full text-gray-300 hover:text-gray-800 focus:text-gray-800 rounded-tr-6" onClick={e => setInputValue("")}> */}
										{/* 				<Apply className="transition duration-200 ease-in-out"> */}
										{/* 					<Apply className="w-6 h-6 transform scale-90"> */}
										{/* 						<XCircleSVG /> */}
										{/* 					</Apply> */}
										{/* 				</Apply> */}
										{/* 			</button> */}
										{/* 		</Reset> */}
										{/* 	</div> */}
										{/* )} */}

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
										STROKE-WIDTH
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
				<div className="w-full" style={{ maxWidth: 1440 }}>
					<Main state={state} dispatch={dispatch} />
				</div>
			</section>
			{/* <div className="h-24" /> */}
		</>
	)
}

export default LayoutFragment
