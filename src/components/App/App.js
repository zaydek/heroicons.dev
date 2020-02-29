import * as Hero from "components/heroicons"
import CSSDebugger from "components/CSSDebugger"
import React from "react"

const IconPane = ({ outline_md: A, solid_sm: B, text, ...props }) => (
	<div className="relative" style={{ paddingBottom: "100%" }}>
		<div className="absolute inset-0">
			<div className="relative flex flex-col justify-center items-center h-full text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded-md shadow hover:z-30 transition duration-150 ease-in-out">
				<A className="w-8 h-8" />
				<div className="p-4 absolute x-inset-0 bottom-0">
					<p className="whitespace-pre text-center font-semibold text-sm leading-tight">
						{text}
					</p>
				</div>
			</div>
		</div>
	</div>
)

// <div className="p-4 my-12 flex flex-row items-center bg-white rounded shadow">
// 	<div className="m-4 mr-6 flex-shrink-0">
// 		<Hero.ExclamationCircle_md className="p-px w-8 h-8 text-indigo-500" />
// 	</div>
// 	<h3 className="font-medium text-lg text-gray-900 leading-relaxed">
// 		<strong>Note:</strong> These icons were <a className="font-semibold text-indigo-500 hover:underline">just released</a> and may have bugs. Please <a className="font-semibold text-indigo-500 hover:underline">create an issue here</a> to report a bug related to an icon. And please <a className="font-semibold text-indigo-500 hover:underline">create an issue here</a> to report a bug related to this viewer.
// 	</h3>
// </div>

const App = props => (
	<div className="px-6 py-24 flex flex-row justify-center bg-gray-100 min-h-full">
		<div className="w-full max-w-screen-lg">
			<h1 className="mb-3 font-semibold font-poppins tracking-tight text-5xl">
				Heroicons viewer
			</h1>
			<div className="my-3 px-6 py-4 flex flex-row items-center bg-white rounded-md shadow">
				<div className="ml-3 mr-6 flex-shrink-0">
					<Hero.QuestionMarkCircle_sm className="w-6 h-6 text-indigo-600" />
				</div>
				<h2 className="font-medium text-xl -tracking-px">
					<a className="text-indigo-500 hover:underline">Open source icons</a> by <a className="text-indigo-500 hover:underline">Steve Schoger</a> and <a className="text-indigo-500 hover:underline">Adam Wathan</a>. <a className="text-indigo-500 hover:underline">Viewer</a> created by <a className="text-indigo-500 hover:underline">Zaydek MG</a>.{"\u00a0\u00a0"}<span className="text-emoji">👋</span>
				</h2>
			</div>
			<h2 className="mt-12 mb-3 font-medium text-lg">
				Outline/Medium icons
			</h2>
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2">
				<IconPane outline_md={Hero.Adjustments_md} solid_sm={Hero.Adjustments_sm} text="adjustments" />
				<IconPane outline_md={Hero.Annotation_md} solid_sm={Hero.Annotation_sm} text="annotation" />
				<IconPane outline_md={Hero.Archive_md} solid_sm={Hero.Archive_sm} text="archive" />
				<IconPane outline_md={Hero.ArrowCircleDown_md} solid_sm={Hero.ArrowCircleDown_sm} text="arrow-circle-down" />
				<IconPane outline_md={Hero.ArrowCircleLeft_md} solid_sm={Hero.ArrowCircleLeft_sm} text="arrow-circle-left" />
				<IconPane outline_md={Hero.ArrowCircleRight_md} solid_sm={Hero.ArrowCircleRight_sm} text="arrow-circle-right" />
				<IconPane outline_md={Hero.ArrowCircleUp_md} solid_sm={Hero.ArrowCircleUp_sm} text="arrow-circle-up" />
				<IconPane outline_md={Hero.ArrowDown_md} solid_sm={Hero.ArrowDown_sm} text="arrow-down" />
				<IconPane outline_md={Hero.ArrowLeft_md} solid_sm={Hero.ArrowLeft_sm} text="arrow-left" />
				<IconPane outline_md={Hero.ArrowNarrowDown_md} solid_sm={Hero.ArrowNarrowDown_sm} text="arrow-narrow-down" />
				<IconPane outline_md={Hero.ArrowNarrowLeft_md} solid_sm={Hero.ArrowNarrowLeft_sm} text="arrow-narrow-left" />
				<IconPane outline_md={Hero.ArrowNarrowRight_md} solid_sm={Hero.ArrowNarrowRight_sm} text="arrow-narrow-right" />
				<IconPane outline_md={Hero.ArrowNarrowUp_md} solid_sm={Hero.ArrowNarrowUp_sm} text="arrow-narrow-up" />
				<IconPane outline_md={Hero.ArrowRight_md} solid_sm={Hero.ArrowRight_sm} text="arrow-right" />
				<IconPane outline_md={Hero.ArrowUp_md} solid_sm={Hero.ArrowUp_sm} text="arrow-up" />
				<IconPane outline_md={Hero.AtSymbol_md} solid_sm={Hero.AtSymbol_sm} text="at-symbol" />
				<IconPane outline_md={Hero.Bell_md} solid_sm={Hero.Bell_sm} text="bell" />
				<IconPane outline_md={Hero.BookOpen_md} solid_sm={Hero.BookOpen_sm} text="book-open" />
				<IconPane outline_md={Hero.Bookmark_md} solid_sm={Hero.Bookmark_sm} text="bookmark" />
				<IconPane outline_md={Hero.Briefcase_md} solid_sm={Hero.Briefcase_sm} text="briefcase" />
				<IconPane outline_md={Hero.Calendar_md} solid_sm={Hero.Calendar_sm} text="calendar" />
				<IconPane outline_md={Hero.Camera_md} solid_sm={Hero.Camera_sm} text="camera" />
				<IconPane outline_md={Hero.Cash_md} solid_sm={Hero.Cash_sm} text="cash" />
				<IconPane outline_md={Hero.ChartPie_md} solid_sm={Hero.ChartPie_sm} text="chart-pie" />
				<IconPane outline_md={Hero.Chat_md} solid_sm={Hero.Chat_sm} text="chat" />
				<IconPane outline_md={Hero.CheckCircle_md} solid_sm={Hero.CheckCircle_sm} text="check-circle" />
				<IconPane outline_md={Hero.Check_md} solid_sm={Hero.Check_sm} text="check" />
				<IconPane outline_md={Hero.CheveronDown_md} solid_sm={Hero.CheveronDown_sm} text="cheveron-down" />
				<IconPane outline_md={Hero.CheveronLeft_md} solid_sm={Hero.CheveronLeft_sm} text="cheveron-left" />
				<IconPane outline_md={Hero.CheveronRight_md} solid_sm={Hero.CheveronRight_sm} text="cheveron-right" />
				<IconPane outline_md={Hero.CheveronUp_md} solid_sm={Hero.CheveronUp_sm} text="cheveron-up" />
				<IconPane outline_md={Hero.ClipboardCheck_md} solid_sm={Hero.ClipboardCheck_sm} text="clipboard-check" />
				<IconPane outline_md={Hero.ClipboardCopy_md} solid_sm={Hero.ClipboardCopy_sm} text="clipboard-copy" />
				<IconPane outline_md={Hero.ClipboardList_md} solid_sm={Hero.ClipboardList_sm} text="clipboard-list" />
				<IconPane outline_md={Hero.Clipboard_md} solid_sm={Hero.Clipboard_sm} text="clipboard" />
				<IconPane outline_md={Hero.Clock_md} solid_sm={Hero.Clock_sm} text="clock" />
				<IconPane outline_md={Hero.CloudDownload_md} solid_sm={Hero.CloudDownload_sm} text="cloud-download" />
				<IconPane outline_md={Hero.CloudUpload_md} solid_sm={Hero.CloudUpload_sm} text="cloud-upload" />
				<IconPane outline_md={Hero.Code_md} solid_sm={Hero.Code_sm} text="code" />
				<IconPane outline_md={Hero.Cog_md} solid_sm={Hero.Cog_sm} text="cog" />
				<IconPane outline_md={Hero.Collection_md} solid_sm={Hero.Collection_sm} text="collection" />
				<IconPane outline_md={Hero.ColorSwatch_md} solid_sm={Hero.ColorSwatch_sm} text="color-swatch" />
				<IconPane outline_md={Hero.CreditCard_md} solid_sm={Hero.CreditCard_sm} text="credit-card" />
				<IconPane outline_md={Hero.CurrencyDollar_md} solid_sm={Hero.CurrencyDollar_sm} text="currency-dollar" />
				<IconPane outline_md={Hero.CurrencyEuro_md} solid_sm={Hero.CurrencyEuro_sm} text="currency-euro" />
				<IconPane outline_md={Hero.CurrencyPound_md} solid_sm={Hero.CurrencyPound_sm} text="currency-pound" />
				<IconPane outline_md={Hero.CurrencyRupee_md} solid_sm={Hero.CurrencyRupee_sm} text="currency-rupee" />
				<IconPane outline_md={Hero.CurrencyYen_md} solid_sm={Hero.CurrencyYen_sm} text="currency-yen" />
				<IconPane outline_md={Hero.DocumentAdd_md} solid_sm={Hero.DocumentAdd_sm} text="document-add" />
				<IconPane outline_md={Hero.DocumentDownload_md} solid_sm={Hero.DocumentDownload_sm} text="document-download" />
				<IconPane outline_md={Hero.DocumentDuplicate_md} solid_sm={Hero.DocumentDuplicate_sm} text="document-duplicate" />
				<IconPane outline_md={Hero.DocumentRemove_md} solid_sm={Hero.DocumentRemove_sm} text="document-remove" />
				<IconPane outline_md={Hero.Document_md} solid_sm={Hero.Document_sm} text="document" />
				<IconPane outline_md={Hero.DotsCircleHorizontal_md} solid_sm={Hero.DotsCircleHorizontal_sm} text="dots-circle-horizontal" />
				<IconPane outline_md={Hero.DotsHorizontal_md} solid_sm={Hero.DotsHorizontal_sm} text="dots-horizontal" />
				<IconPane outline_md={Hero.DotsVertical_md} solid_sm={Hero.DotsVertical_sm} text="dots-vertical" />
				<IconPane outline_md={Hero.Download_md} solid_sm={Hero.Download_sm} text="download" />
				<IconPane outline_md={Hero.Duplicate_md} solid_sm={Hero.Duplicate_sm} text="duplicate" />
				<IconPane outline_md={Hero.EmojiHappy_md} solid_sm={Hero.EmojiHappy_sm} text="emoji-happy" />
				<IconPane outline_md={Hero.EmojiSad_md} solid_sm={Hero.EmojiSad_sm} text="emoji-sad" />
				<IconPane outline_md={Hero.ExclamationCircle_md} solid_sm={Hero.ExclamationCircle_sm} text="exclamation-circle" />
				<IconPane outline_md={Hero.Exclamation_md} solid_sm={Hero.Exclamation_sm} text="exclamation" />
				<IconPane outline_md={Hero.ExternalLink_md} solid_sm={Hero.ExternalLink_sm} text="external-link" />
				<IconPane outline_md={Hero.Eye_md} solid_sm={Hero.Eye_sm} text="eye" />
				<IconPane outline_md={Hero.Filter_md} solid_sm={Hero.Filter_sm} text="filter" />
				<IconPane outline_md={Hero.Flag_md} solid_sm={Hero.Flag_sm} text="flag" />
				<IconPane outline_md={Hero.Folder_md} solid_sm={Hero.Folder_sm} text="folder" />
				<IconPane outline_md={Hero.GlobeAlt_md} solid_sm={Hero.GlobeAlt_sm} text="globe-alt" />
				<IconPane outline_md={Hero.Globe_md} solid_sm={Hero.Globe_sm} text="globe" />
				<IconPane outline_md={Hero.Hashtag_md} solid_sm={Hero.Hashtag_sm} text="hashtag" />
				<IconPane outline_md={Hero.Heart_md} solid_sm={Hero.Heart_sm} text="heart" />
				<IconPane outline_md={Hero.Home_md} solid_sm={Hero.Home_sm} text="home" />
				<IconPane outline_md={Hero.InboxIn_md} solid_sm={Hero.InboxIn_sm} text="inbox-in" />
				<IconPane outline_md={Hero.Inbox_md} solid_sm={Hero.Inbox_sm} text="inbox" />
				<IconPane outline_md={Hero.InformationCircle_md} solid_sm={Hero.InformationCircle_sm} text="information-circle" />
				<IconPane outline_md={Hero.LightBulb_md} solid_sm={Hero.LightBulb_sm} text="light-bulb" />
				<IconPane outline_md={Hero.LightningBolt_md} solid_sm={Hero.LightningBolt_sm} text="lightning-bolt" />
				<IconPane outline_md={Hero.Link_md} solid_sm={Hero.Link_sm} text="link" />
				<IconPane outline_md={Hero.LocationMarker_md} solid_sm={Hero.LocationMarker_sm} text="location-marker" />
				<IconPane outline_md={Hero.LockClosed_md} solid_sm={Hero.LockClosed_sm} text="lock-closed" />
				<IconPane outline_md={Hero.LockOpen_md} solid_sm={Hero.LockOpen_sm} text="lock-open" />
				<IconPane outline_md={Hero.MailOpen_md} solid_sm={Hero.MailOpen_sm} text="mail-open" />
				<IconPane outline_md={Hero.Mail_md} solid_sm={Hero.Mail_sm} text="mail" />
				<IconPane outline_md={Hero.MenuAlt1_md} solid_sm={Hero.MenuAlt1_sm} text="menu-alt-1" />
				<IconPane outline_md={Hero.MenuAlt2_md} solid_sm={Hero.MenuAlt2_sm} text="menu-alt-2" />
				<IconPane outline_md={Hero.MenuAlt3_md} solid_sm={Hero.MenuAlt3_sm} text="menu-alt-3" />
				<IconPane outline_md={Hero.MenuAlt4_md} solid_sm={Hero.MenuAlt4_sm} text="menu-alt-4" />
				<IconPane outline_md={Hero.Menu_md} solid_sm={Hero.Menu_sm} text="menu" />
				<IconPane outline_md={Hero.MinusCircle_md} solid_sm={Hero.MinusCircle_sm} text="minus-circle" />
				<IconPane outline_md={Hero.Moon_md} solid_sm={Hero.Moon_sm} text="moon" />
				<IconPane outline_md={Hero.OfficeBuilding_md} solid_sm={Hero.OfficeBuilding_sm} text="office-building" />
				<IconPane outline_md={Hero.PaperClip_md} solid_sm={Hero.PaperClip_sm} text="paper-clip" />
				<IconPane outline_md={Hero.PencilAlt_md} solid_sm={Hero.PencilAlt_sm} text="pencil-alt" />
				<IconPane outline_md={Hero.Pencil_md} solid_sm={Hero.Pencil_sm} text="pencil" />
				<IconPane outline_md={Hero.PhoneIncoming_md} solid_sm={Hero.PhoneIncoming_sm} text="phone-incoming" />
				<IconPane outline_md={Hero.PhoneOutgoing_md} solid_sm={Hero.PhoneOutgoing_sm} text="phone-outgoing" />
				<IconPane outline_md={Hero.Phone_md} solid_sm={Hero.Phone_sm} text="phone" />
				<IconPane outline_md={Hero.Photograph_md} solid_sm={Hero.Photograph_sm} text="photograph" />
				<IconPane outline_md={Hero.PlusCircle_md} solid_sm={Hero.PlusCircle_sm} text="plus-circle" />
				<IconPane outline_md={Hero.Plus_md} solid_sm={Hero.Plus_sm} text="plus" />
				<IconPane outline_md={Hero.Printer_md} solid_sm={Hero.Printer_sm} text="printer" />
				<IconPane outline_md={Hero.Qrcode_md} solid_sm={Hero.Qrcode_sm} text="qrcode" />
				<IconPane outline_md={Hero.QuestionMarkCircle_md} solid_sm={Hero.QuestionMarkCircle_sm} text="question-mark-circle" />
				<IconPane outline_md={Hero.ReceiptRefund_md} solid_sm={Hero.ReceiptRefund_sm} text="receipt-refund" />
				<IconPane outline_md={Hero.Refresh_md} solid_sm={Hero.Refresh_sm} text="refresh" />
				<IconPane outline_md={Hero.Reply_md} solid_sm={Hero.Reply_sm} text="reply" />
				<IconPane outline_md={Hero.Scale_md} solid_sm={Hero.Scale_sm} text="scale" />
				<IconPane outline_md={Hero.Search_md} solid_sm={Hero.Search_sm} text="search" />
				<IconPane outline_md={Hero.Selector_md} solid_sm={Hero.Selector_sm} text="selector" />
				<IconPane outline_md={Hero.Share_md} solid_sm={Hero.Share_sm} text="share" />
				<IconPane outline_md={Hero.ShieldCheck_md} solid_sm={Hero.ShieldCheck_sm} text="shield-check" />
				<IconPane outline_md={Hero.ShieldExclamation_md} solid_sm={Hero.ShieldExclamation_sm} text="shield-exclamation" />
				<IconPane outline_md={Hero.SortAscending_md} solid_sm={Hero.SortAscending_sm} text="sort-ascending" />
				<IconPane outline_md={Hero.SortDescending_md} solid_sm={Hero.SortDescending_sm} text="sort-descending" />
				<IconPane outline_md={Hero.Sparkles_md} solid_sm={Hero.Sparkles_sm} text="sparkles" />
				<IconPane outline_md={Hero.Sun_md} solid_sm={Hero.Sun_sm} text="sun" />
				<IconPane outline_md={Hero.SwitchHorizontal_md} solid_sm={Hero.SwitchHorizontal_sm} text="switch-horizontal" />
				<IconPane outline_md={Hero.SwitchVertical_md} solid_sm={Hero.SwitchVertical_sm} text="switch-vertical" />
				<IconPane outline_md={Hero.Tag_md} solid_sm={Hero.Tag_sm} text="tag" />
				<IconPane outline_md={Hero.Template_md} solid_sm={Hero.Template_sm} text="template" />
				<IconPane outline_md={Hero.Ticket_md} solid_sm={Hero.Ticket_sm} text="ticket" />
				<IconPane outline_md={Hero.Translate_md} solid_sm={Hero.Translate_sm} text="translate" />
				<IconPane outline_md={Hero.Trash_md} solid_sm={Hero.Trash_sm} text="trash" />
				<IconPane outline_md={Hero.TrendingDown_md} solid_sm={Hero.TrendingDown_sm} text="trending-down" />
				<IconPane outline_md={Hero.TrendingUp_md} solid_sm={Hero.TrendingUp_sm} text="trending-up" />
				<IconPane outline_md={Hero.Upload_md} solid_sm={Hero.Upload_sm} text="upload" />
				<IconPane outline_md={Hero.UserAdd_md} solid_sm={Hero.UserAdd_sm} text="user-add" />
				<IconPane outline_md={Hero.UserCircle_md} solid_sm={Hero.UserCircle_sm} text="user-circle" />
				<IconPane outline_md={Hero.UserGroup_md} solid_sm={Hero.UserGroup_sm} text="user-group" />
				<IconPane outline_md={Hero.UserRemove_md} solid_sm={Hero.UserRemove_sm} text="user-remove" />
				<IconPane outline_md={Hero.User_md} solid_sm={Hero.User_sm} text="user" />
				<IconPane outline_md={Hero.Users_md} solid_sm={Hero.Users_sm} text="users" />
				<IconPane outline_md={Hero.ViewBoards_md} solid_sm={Hero.ViewBoards_sm} text="view-boards" />
				<IconPane outline_md={Hero.ViewList_md} solid_sm={Hero.ViewList_sm} text="view-list" />
				<IconPane outline_md={Hero.VolumeOff_md} solid_sm={Hero.VolumeOff_sm} text="volume-off" />
				<IconPane outline_md={Hero.VolumeUp_md} solid_sm={Hero.VolumeUp_sm} text="volume-up" />
				<IconPane outline_md={Hero.XCircle_md} solid_sm={Hero.XCircle_sm} text="x-circle" />
				<IconPane outline_md={Hero.X_md} solid_sm={Hero.X_sm} text="x" />
				<IconPane outline_md={Hero.ZoomIn_md} solid_sm={Hero.ZoomIn_sm} text="zoom-in" />
				<IconPane outline_md={Hero.ZoomOut_md} solid_sm={Hero.ZoomOut_sm} text="zoom-out" />
			</div>
		</div>
		{/* <CSSDebugger /> */}
	</div>
)

export default App
