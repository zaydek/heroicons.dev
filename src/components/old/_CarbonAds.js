// TODO: Extract to useCarbonAds?
// const carbonAdsRef = React.useRef()
//
// const [showCarbonAds, setShowCarbonAds] = React.useState(false)
// const [delayedShowCarbonAds, setDelayedShowCarbonAds] = React.useState(false)
//
// // React.useEffect(() => {
// //  if (showCarbonAds) {
// //    setTimeout(() => {
// //      setDelayedShowCarbonAds(true)
// //    }, 700) // -> duration-700
// //  }
// // }, [showCarbonAds])
//
// // NOTE: Because <CarbonAds> cannot be used more than
// // once, we move carbonAdsRef.current between
// // #carbon-ads-placement and #carbon-ads-desktop-placement
// // on media.lg rerenders.
// React.useEffect(() => {
//   if (media.lg) {
//     const el = document.getElementById("carbon-ads-placement")
//     if (!el.children.length) {
//       el.append(carbonAdsRef.current)
//     }
//   } else {
//     const el = document.getElementById("carbon-ads-desktop-placement")
//     if (!el.children.length) {
//       el.append(carbonAdsRef.current)
//     }
//   }
// }, [media.lg])

// {/* Carbon Ads (alt) */}
// <aside className="p-4 absolute top-0 right-0 z-30">
// 	<Transition
// 		on={false /* FIXME; showCarbonAds */}
// 		className="transition duration-700 ease-out"
// 		from="opacity-0 transform scale-90 pointer-events-none"
// 		to="opacity-100 transform scale-100 pointer-events-auto"
// 	>
// 		<div id="carbon-ads-desktop-placement" />
// 	</Transition>
// </aside>

// {/* Carbon Ads */}
// <Transition
// 	on={false /* FIXME; showCarbonAds */}
// 	className="transition duration-700 ease-out"
// 	from="opacity-0 transform scale-90 pointer-events-none"
// 	to="opacity-100 transform scale-100 pointer-events-auto"
// >
// 	<div id="carbon-ads-placement" className="-mt-16 pt-4 lg:pt-0 pb-8 block xl:hidden">
// 		{/* FIXME */}
// 		<div /* ref={carbonAdsRef} */ className="rounded-75 shadow-lg">
// 			<div className="rounded-75 shadow-lg">
// 				<div className="relative">
//
// 					<div onClick={e => setShowCarbonAds(false)}>
// 						{/* <CarbonAds */}
// 						{/* 	className="border border-gray-700 rounded-75 overflow-hidden" */}
// 						{/* 	style={{ */}
// 						{/* 		width: 332, */}
// 						{/* 		height: 127, */}
// 						{/* 	}} */}
// 						{/* 	src="//cdn.carbonads.com/carbon.js?serve=CE7DV2QJ&placement=heroiconsdev" */}
// 						{/* 	onLoad={() => { */}
// 						{/* 		setTimeout(() => { */}
// 						{/* 			setShowCarbonAds(true) */}
// 						{/* 		}, 1e3) */}
// 						{/* 	}} */}
// 						{/* /> */}
// 					</div>
//
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// </Transition>
