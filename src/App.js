import CSSDebugger from "./CSSDebugger"
import React from "react"

// https://github.com/refactoringui/heroicons/tree/master/dist/outline-md
//
/* eslint-disable react/jsx-pascal-case */
import { ReactComponent as Adjustments_md } from "svg/outline-md/md-adjustments.svg"
import { ReactComponent as Annotation_md } from "svg/outline-md/md-annotation.svg"
import { ReactComponent as Archive_md } from "svg/outline-md/md-archive.svg"
import { ReactComponent as ArrowCircleDown_md } from "svg/outline-md/md-arrow-circle-down.svg"
import { ReactComponent as ArrowCircleLeft_md } from "svg/outline-md/md-arrow-circle-left.svg"
import { ReactComponent as ArrowCircleRight_md } from "svg/outline-md/md-arrow-circle-right.svg"
import { ReactComponent as ArrowCircleUp_md } from "svg/outline-md/md-arrow-circle-up.svg"
import { ReactComponent as ArrowDown_md } from "svg/outline-md/md-arrow-down.svg"
import { ReactComponent as ArrowLeft_md } from "svg/outline-md/md-arrow-left.svg"
import { ReactComponent as ArrowNarrowDown_md } from "svg/outline-md/md-arrow-narrow-down.svg"
import { ReactComponent as ArrowNarrowLeft_md } from "svg/outline-md/md-arrow-narrow-left.svg"
import { ReactComponent as ArrowNarrowRight_md } from "svg/outline-md/md-arrow-narrow-right.svg"
import { ReactComponent as ArrowNarrowUp_md } from "svg/outline-md/md-arrow-narrow-up.svg"
import { ReactComponent as ArrowRight_md } from "svg/outline-md/md-arrow-right.svg"
import { ReactComponent as ArrowUp_md } from "svg/outline-md/md-arrow-up.svg"
import { ReactComponent as AtSymbol_md } from "svg/outline-md/md-at-symbol.svg"
import { ReactComponent as Bell_md } from "svg/outline-md/md-bell.svg"
import { ReactComponent as BookOpen_md } from "svg/outline-md/md-book-open.svg"
import { ReactComponent as Bookmark_md } from "svg/outline-md/md-bookmark.svg"
import { ReactComponent as Briefcase_md } from "svg/outline-md/md-briefcase.svg"
import { ReactComponent as Calendar_md } from "svg/outline-md/md-calendar.svg"
import { ReactComponent as Camera_md } from "svg/outline-md/md-camera.svg"
import { ReactComponent as Cash_md } from "svg/outline-md/md-cash.svg"
import { ReactComponent as ChartPie_md } from "svg/outline-md/md-chart-pie.svg"
import { ReactComponent as Chat_md } from "svg/outline-md/md-chat.svg"
import { ReactComponent as CheckCircle_md } from "svg/outline-md/md-check-circle.svg"
import { ReactComponent as Check_md } from "svg/outline-md/md-check.svg"
import { ReactComponent as CheveronDown_md } from "svg/outline-md/md-cheveron-down.svg"
import { ReactComponent as CheveronLeft_md } from "svg/outline-md/md-cheveron-left.svg"
import { ReactComponent as CheveronRight_md } from "svg/outline-md/md-cheveron-right.svg"
import { ReactComponent as CheveronUp_md } from "svg/outline-md/md-cheveron-up.svg"
import { ReactComponent as ClipboardCheck_md } from "svg/outline-md/md-clipboard-check.svg"
import { ReactComponent as ClipboardCopy_md } from "svg/outline-md/md-clipboard-copy.svg"
import { ReactComponent as ClipboardList_md } from "svg/outline-md/md-clipboard-list.svg"
import { ReactComponent as Clipboard_md } from "svg/outline-md/md-clipboard.svg"
import { ReactComponent as Clock_md } from "svg/outline-md/md-clock.svg"
import { ReactComponent as CloudDownload_md } from "svg/outline-md/md-cloud-download.svg"
import { ReactComponent as CloudUpload_md } from "svg/outline-md/md-cloud-upload.svg"
import { ReactComponent as Code_md } from "svg/outline-md/md-code.svg"
import { ReactComponent as Cog_md } from "svg/outline-md/md-cog.svg"
import { ReactComponent as Collection_md } from "svg/outline-md/md-collection.svg"
import { ReactComponent as ColorSwatch_md } from "svg/outline-md/md-color-swatch.svg"
import { ReactComponent as CreditCard_md } from "svg/outline-md/md-credit-card.svg"
import { ReactComponent as CurrencyDollar_md } from "svg/outline-md/md-currency-dollar.svg"
import { ReactComponent as CurrencyEuro_md } from "svg/outline-md/md-currency-euro.svg"
import { ReactComponent as CurrencyPound_md } from "svg/outline-md/md-currency-pound.svg"
import { ReactComponent as CurrencyRupee_md } from "svg/outline-md/md-currency-rupee.svg"
import { ReactComponent as CurrencyYen_md } from "svg/outline-md/md-currency-yen.svg"
import { ReactComponent as DocumentAdd_md } from "svg/outline-md/md-document-add.svg"
import { ReactComponent as DocumentDownload_md } from "svg/outline-md/md-document-download.svg"
import { ReactComponent as DocumentDuplicate_md } from "svg/outline-md/md-document-duplicate.svg"
import { ReactComponent as DocumentRemove_md } from "svg/outline-md/md-document-remove.svg"
import { ReactComponent as Document_md } from "svg/outline-md/md-document.svg"
import { ReactComponent as DotsCircleHorizontal_md } from "svg/outline-md/md-dots-circle-horizontal.svg"
import { ReactComponent as DotsHorizontal_md } from "svg/outline-md/md-dots-horizontal.svg"
import { ReactComponent as DotsVertical_md } from "svg/outline-md/md-dots-vertical.svg"
import { ReactComponent as Download_md } from "svg/outline-md/md-download.svg"
import { ReactComponent as Duplicate_md } from "svg/outline-md/md-duplicate.svg"
import { ReactComponent as EmojiHappy_md } from "svg/outline-md/md-emoji-happy.svg"
import { ReactComponent as EmojiSad_md } from "svg/outline-md/md-emoji-sad.svg"
import { ReactComponent as ExclamationCircle_md } from "svg/outline-md/md-exclamation-circle.svg"
import { ReactComponent as Exclamation_md } from "svg/outline-md/md-exclamation.svg"
import { ReactComponent as ExternalLink_md } from "svg/outline-md/md-external-link.svg"
import { ReactComponent as Eye_md } from "svg/outline-md/md-eye.svg"
import { ReactComponent as Filter_md } from "svg/outline-md/md-filter.svg"
import { ReactComponent as Flag_md } from "svg/outline-md/md-flag.svg"
import { ReactComponent as Folder_md } from "svg/outline-md/md-folder.svg"
import { ReactComponent as GlobeAlt_md } from "svg/outline-md/md-globe-alt.svg"
import { ReactComponent as Globe_md } from "svg/outline-md/md-globe.svg"
import { ReactComponent as Hashtag_md } from "svg/outline-md/md-hashtag.svg"
import { ReactComponent as Heart_md } from "svg/outline-md/md-heart.svg"
import { ReactComponent as Home_md } from "svg/outline-md/md-home.svg"
import { ReactComponent as InboxIn_md } from "svg/outline-md/md-inbox-in.svg"
import { ReactComponent as Inbox_md } from "svg/outline-md/md-inbox.svg"
import { ReactComponent as InformationCircle_md } from "svg/outline-md/md-information-circle.svg"
import { ReactComponent as LightBulb_md } from "svg/outline-md/md-light-bulb.svg"
import { ReactComponent as LightningBolt_md } from "svg/outline-md/md-lightning-bolt.svg"
import { ReactComponent as Link_md } from "svg/outline-md/md-link.svg"
import { ReactComponent as LocationMarker_md } from "svg/outline-md/md-location-marker.svg"
import { ReactComponent as LockClosed_md } from "svg/outline-md/md-lock-closed.svg"
import { ReactComponent as LockOpen_md } from "svg/outline-md/md-lock-open.svg"
import { ReactComponent as MailOpen_md } from "svg/outline-md/md-mail-open.svg"
import { ReactComponent as Mail_md } from "svg/outline-md/md-mail.svg"
import { ReactComponent as MenuAlt1_md } from "svg/outline-md/md-menu-alt-1.svg"
import { ReactComponent as MenuAlt2_md } from "svg/outline-md/md-menu-alt-2.svg"
import { ReactComponent as MenuAlt3_md } from "svg/outline-md/md-menu-alt-3.svg"
import { ReactComponent as MenuAlt4_md } from "svg/outline-md/md-menu-alt-4.svg"
import { ReactComponent as Menu_md } from "svg/outline-md/md-menu.svg"
import { ReactComponent as MinusCircle_md } from "svg/outline-md/md-minus-circle.svg"
import { ReactComponent as Moon_md } from "svg/outline-md/md-moon.svg"
import { ReactComponent as OfficeBuilding_md } from "svg/outline-md/md-office-building.svg"
import { ReactComponent as PaperClip_md } from "svg/outline-md/md-paper-clip.svg"
import { ReactComponent as PencilAlt_md } from "svg/outline-md/md-pencil-alt.svg"
import { ReactComponent as Pencil_md } from "svg/outline-md/md-pencil.svg"
import { ReactComponent as PhoneIncoming_md } from "svg/outline-md/md-phone-incoming.svg"
import { ReactComponent as PhoneOutgoing_md } from "svg/outline-md/md-phone-outgoing.svg"
import { ReactComponent as Phone_md } from "svg/outline-md/md-phone.svg"
import { ReactComponent as Photograph_md } from "svg/outline-md/md-photograph.svg"
import { ReactComponent as PlusCircle_md } from "svg/outline-md/md-plus-circle.svg"
import { ReactComponent as Plus_md } from "svg/outline-md/md-plus.svg"
import { ReactComponent as Printer_md } from "svg/outline-md/md-printer.svg"
import { ReactComponent as Qrcode_md } from "svg/outline-md/md-qrcode.svg"
import { ReactComponent as QuestionMarkCircle_md } from "svg/outline-md/md-question-mark-circle.svg"
import { ReactComponent as ReceiptRefund_md } from "svg/outline-md/md-receipt-refund.svg"
import { ReactComponent as Refresh_md } from "svg/outline-md/md-refresh.svg"
import { ReactComponent as Reply_md } from "svg/outline-md/md-reply.svg"
import { ReactComponent as Scale_md } from "svg/outline-md/md-scale.svg"
import { ReactComponent as Search_md } from "svg/outline-md/md-search.svg"
import { ReactComponent as Selector_md } from "svg/outline-md/md-selector.svg"
import { ReactComponent as Share_md } from "svg/outline-md/md-share.svg"
import { ReactComponent as ShieldCheck_md } from "svg/outline-md/md-shield-check.svg"
import { ReactComponent as ShieldExclamation_md } from "svg/outline-md/md-shield-exclamation.svg"
import { ReactComponent as SortAscending_md } from "svg/outline-md/md-sort-ascending.svg"
import { ReactComponent as SortDescending_md } from "svg/outline-md/md-sort-descending.svg"
import { ReactComponent as Sparkles_md } from "svg/outline-md/md-sparkles.svg"
import { ReactComponent as Sun_md } from "svg/outline-md/md-sun.svg"
import { ReactComponent as SwitchHorizontal_md } from "svg/outline-md/md-switch-horizontal.svg"
import { ReactComponent as SwitchVertical_md } from "svg/outline-md/md-switch-vertical.svg"
import { ReactComponent as Tag_md } from "svg/outline-md/md-tag.svg"
import { ReactComponent as Template_md } from "svg/outline-md/md-template.svg"
import { ReactComponent as Ticket_md } from "svg/outline-md/md-ticket.svg"
import { ReactComponent as Translate_md } from "svg/outline-md/md-translate.svg"
import { ReactComponent as Trash_md } from "svg/outline-md/md-trash.svg"
import { ReactComponent as TrendingDown_md } from "svg/outline-md/md-trending-down.svg"
import { ReactComponent as TrendingUp_md } from "svg/outline-md/md-trending-up.svg"
import { ReactComponent as Upload_md } from "svg/outline-md/md-upload.svg"
import { ReactComponent as UserAdd_md } from "svg/outline-md/md-user-add.svg"
import { ReactComponent as UserCircle_md } from "svg/outline-md/md-user-circle.svg"
import { ReactComponent as UserGroup_md } from "svg/outline-md/md-user-group.svg"
import { ReactComponent as UserRemove_md } from "svg/outline-md/md-user-remove.svg"
import { ReactComponent as User_md } from "svg/outline-md/md-user.svg"
import { ReactComponent as Users_md } from "svg/outline-md/md-users.svg"
import { ReactComponent as ViewBoards_md } from "svg/outline-md/md-view-boards.svg"
import { ReactComponent as ViewList_md } from "svg/outline-md/md-view-list.svg"
import { ReactComponent as VolumeOff_md } from "svg/outline-md/md-volume-off.svg"
import { ReactComponent as VolumeUp_md } from "svg/outline-md/md-volume-up.svg"
import { ReactComponent as XCircle_md } from "svg/outline-md/md-x-circle.svg"
import { ReactComponent as X_md } from "svg/outline-md/md-x.svg"
import { ReactComponent as ZoomIn_md } from "svg/outline-md/md-zoom-in.svg"
import { ReactComponent as ZoomOut_md } from "svg/outline-md/md-zoom-out.svg"

// https://github.com/refactoringui/heroicons/tree/master/dist/solid-sm
import { ReactComponent as Adjustments_sm } from "svg/solid-sm/sm-adjustments.svg"
import { ReactComponent as Annotation_sm } from "svg/solid-sm/sm-annotation.svg"
import { ReactComponent as Archive_sm } from "svg/solid-sm/sm-archive.svg"
import { ReactComponent as ArrowCircleDown_sm } from "svg/solid-sm/sm-arrow-circle-down.svg"
import { ReactComponent as ArrowCircleLeft_sm } from "svg/solid-sm/sm-arrow-circle-left.svg"
import { ReactComponent as ArrowCircleRight_sm } from "svg/solid-sm/sm-arrow-circle-right.svg"
import { ReactComponent as ArrowCircleUp_sm } from "svg/solid-sm/sm-arrow-circle-up.svg"
import { ReactComponent as ArrowDown_sm } from "svg/solid-sm/sm-arrow-down.svg"
import { ReactComponent as ArrowLeft_sm } from "svg/solid-sm/sm-arrow-left.svg"
import { ReactComponent as ArrowNarrowDown_sm } from "svg/solid-sm/sm-arrow-narrow-down.svg"
import { ReactComponent as ArrowNarrowLeft_sm } from "svg/solid-sm/sm-arrow-narrow-left.svg"
import { ReactComponent as ArrowNarrowRight_sm } from "svg/solid-sm/sm-arrow-narrow-right.svg"
import { ReactComponent as ArrowNarrowUp_sm } from "svg/solid-sm/sm-arrow-narrow-up.svg"
import { ReactComponent as ArrowRight_sm } from "svg/solid-sm/sm-arrow-right.svg"
import { ReactComponent as ArrowUp_sm } from "svg/solid-sm/sm-arrow-up.svg"
import { ReactComponent as AtSymbol_sm } from "svg/solid-sm/sm-at-symbol.svg"
import { ReactComponent as Bell_sm } from "svg/solid-sm/sm-bell.svg"
import { ReactComponent as BookOpen_sm } from "svg/solid-sm/sm-book-open.svg"
import { ReactComponent as Bookmark_sm } from "svg/solid-sm/sm-bookmark.svg"
import { ReactComponent as Briefcase_sm } from "svg/solid-sm/sm-briefcase.svg"
import { ReactComponent as Calendar_sm } from "svg/solid-sm/sm-calendar.svg"
import { ReactComponent as Camera_sm } from "svg/solid-sm/sm-camera.svg"
import { ReactComponent as Cash_sm } from "svg/solid-sm/sm-cash.svg"
import { ReactComponent as ChartPie_sm } from "svg/solid-sm/sm-chart-pie.svg"
import { ReactComponent as Chat_sm } from "svg/solid-sm/sm-chat.svg"
import { ReactComponent as CheckCircle_sm } from "svg/solid-sm/sm-check-circle.svg"
import { ReactComponent as Check_sm } from "svg/solid-sm/sm-check.svg"
import { ReactComponent as CheveronDown_sm } from "svg/solid-sm/sm-cheveron-down.svg"
import { ReactComponent as CheveronLeft_sm } from "svg/solid-sm/sm-cheveron-left.svg"
import { ReactComponent as CheveronRight_sm } from "svg/solid-sm/sm-cheveron-right.svg"
import { ReactComponent as CheveronUp_sm } from "svg/solid-sm/sm-cheveron-up.svg"
import { ReactComponent as ClipboardCheck_sm } from "svg/solid-sm/sm-clipboard-check.svg"
import { ReactComponent as ClipboardCopy_sm } from "svg/solid-sm/sm-clipboard-copy.svg"
import { ReactComponent as ClipboardList_sm } from "svg/solid-sm/sm-clipboard-list.svg"
import { ReactComponent as Clipboard_sm } from "svg/solid-sm/sm-clipboard.svg"
import { ReactComponent as Clock_sm } from "svg/solid-sm/sm-clock.svg"
import { ReactComponent as CloudDownload_sm } from "svg/solid-sm/sm-cloud-download.svg"
import { ReactComponent as CloudUpload_sm } from "svg/solid-sm/sm-cloud-upload.svg"
import { ReactComponent as Code_sm } from "svg/solid-sm/sm-code.svg"
import { ReactComponent as Cog_sm } from "svg/solid-sm/sm-cog.svg"
import { ReactComponent as Collection_sm } from "svg/solid-sm/sm-collection.svg"
import { ReactComponent as ColorSwatch_sm } from "svg/solid-sm/sm-color-swatch.svg"
import { ReactComponent as CreditCard_sm } from "svg/solid-sm/sm-credit-card.svg"
import { ReactComponent as CurrencyDollar_sm } from "svg/solid-sm/sm-currency-dollar.svg"
import { ReactComponent as CurrencyEuro_sm } from "svg/solid-sm/sm-currency-euro.svg"
import { ReactComponent as CurrencyPound_sm } from "svg/solid-sm/sm-currency-pound.svg"
import { ReactComponent as CurrencyRupee_sm } from "svg/solid-sm/sm-currency-rupee.svg"
import { ReactComponent as CurrencyYen_sm } from "svg/solid-sm/sm-currency-yen.svg"
import { ReactComponent as DocumentAdd_sm } from "svg/solid-sm/sm-document-add.svg"
import { ReactComponent as DocumentDownload_sm } from "svg/solid-sm/sm-document-download.svg"
import { ReactComponent as DocumentDuplicate_sm } from "svg/solid-sm/sm-document-duplicate.svg"
import { ReactComponent as DocumentRemove_sm } from "svg/solid-sm/sm-document-remove.svg"
import { ReactComponent as Document_sm } from "svg/solid-sm/sm-document.svg"
import { ReactComponent as DotsCircleHorizontal_sm } from "svg/solid-sm/sm-dots-circle-horizontal.svg"
import { ReactComponent as DotsHorizontal_sm } from "svg/solid-sm/sm-dots-horizontal.svg"
import { ReactComponent as DotsVertical_sm } from "svg/solid-sm/sm-dots-vertical.svg"
import { ReactComponent as Download_sm } from "svg/solid-sm/sm-download.svg"
import { ReactComponent as Duplicate_sm } from "svg/solid-sm/sm-duplicate.svg"
import { ReactComponent as EmojiHappy_sm } from "svg/solid-sm/sm-emoji-happy.svg"
import { ReactComponent as EmojiSad_sm } from "svg/solid-sm/sm-emoji-sad.svg"
import { ReactComponent as ExclamationCircle_sm } from "svg/solid-sm/sm-exclamation-circle.svg"
import { ReactComponent as Exclamation_sm } from "svg/solid-sm/sm-exclamation.svg"
import { ReactComponent as ExternalLink_sm } from "svg/solid-sm/sm-external-link.svg"
import { ReactComponent as Eye_sm } from "svg/solid-sm/sm-eye.svg"
import { ReactComponent as Filter_sm } from "svg/solid-sm/sm-filter.svg"
import { ReactComponent as Flag_sm } from "svg/solid-sm/sm-flag.svg"
import { ReactComponent as Folder_sm } from "svg/solid-sm/sm-folder.svg"
import { ReactComponent as GlobeAlt_sm } from "svg/solid-sm/sm-globe-alt.svg"
import { ReactComponent as Globe_sm } from "svg/solid-sm/sm-globe.svg"
import { ReactComponent as Hashtag_sm } from "svg/solid-sm/sm-hashtag.svg"
import { ReactComponent as Heart_sm } from "svg/solid-sm/sm-heart.svg"
import { ReactComponent as Home_sm } from "svg/solid-sm/sm-home.svg"
import { ReactComponent as InboxIn_sm } from "svg/solid-sm/sm-inbox-in.svg"
import { ReactComponent as Inbox_sm } from "svg/solid-sm/sm-inbox.svg"
import { ReactComponent as InformationCircle_sm } from "svg/solid-sm/sm-information-circle.svg"
import { ReactComponent as LightBulb_sm } from "svg/solid-sm/sm-light-bulb.svg"
import { ReactComponent as LightningBolt_sm } from "svg/solid-sm/sm-lightning-bolt.svg"
import { ReactComponent as Link_sm } from "svg/solid-sm/sm-link.svg"
import { ReactComponent as LocationMarker_sm } from "svg/solid-sm/sm-location-marker.svg"
import { ReactComponent as LockClosed_sm } from "svg/solid-sm/sm-lock-closed.svg"
import { ReactComponent as LockOpen_sm } from "svg/solid-sm/sm-lock-open.svg"
import { ReactComponent as MailOpen_sm } from "svg/solid-sm/sm-mail-open.svg"
import { ReactComponent as Mail_sm } from "svg/solid-sm/sm-mail.svg"
import { ReactComponent as MenuAlt1_sm } from "svg/solid-sm/sm-menu-alt-1.svg"
import { ReactComponent as MenuAlt2_sm } from "svg/solid-sm/sm-menu-alt-2.svg"
import { ReactComponent as MenuAlt3_sm } from "svg/solid-sm/sm-menu-alt-3.svg"
import { ReactComponent as MenuAlt4_sm } from "svg/solid-sm/sm-menu-alt-4.svg"
import { ReactComponent as Menu_sm } from "svg/solid-sm/sm-menu.svg"
import { ReactComponent as MinusCircle_sm } from "svg/solid-sm/sm-minus-circle.svg"
import { ReactComponent as Moon_sm } from "svg/solid-sm/sm-moon.svg"
import { ReactComponent as OfficeBuilding_sm } from "svg/solid-sm/sm-office-building.svg"
import { ReactComponent as PaperClip_sm } from "svg/solid-sm/sm-paper-clip.svg"
import { ReactComponent as PencilAlt_sm } from "svg/solid-sm/sm-pencil-alt.svg"
import { ReactComponent as Pencil_sm } from "svg/solid-sm/sm-pencil.svg"
import { ReactComponent as PhoneIncoming_sm } from "svg/solid-sm/sm-phone-incoming.svg"
import { ReactComponent as PhoneOutgoing_sm } from "svg/solid-sm/sm-phone-outgoing.svg"
import { ReactComponent as Phone_sm } from "svg/solid-sm/sm-phone.svg"
import { ReactComponent as Photograph_sm } from "svg/solid-sm/sm-photograph.svg"
import { ReactComponent as PlusCircle_sm } from "svg/solid-sm/sm-plus-circle.svg"
import { ReactComponent as Plus_sm } from "svg/solid-sm/sm-plus.svg"
import { ReactComponent as Printer_sm } from "svg/solid-sm/sm-printer.svg"
import { ReactComponent as Qrcode_sm } from "svg/solid-sm/sm-qrcode.svg"
import { ReactComponent as QuestionMarkCircle_sm } from "svg/solid-sm/sm-question-mark-circle.svg"
import { ReactComponent as ReceiptRefund_sm } from "svg/solid-sm/sm-receipt-refund.svg"
import { ReactComponent as Refresh_sm } from "svg/solid-sm/sm-refresh.svg"
import { ReactComponent as Reply_sm } from "svg/solid-sm/sm-reply.svg"
import { ReactComponent as Scale_sm } from "svg/solid-sm/sm-scale.svg"
import { ReactComponent as Search_sm } from "svg/solid-sm/sm-search.svg"
import { ReactComponent as Selector_sm } from "svg/solid-sm/sm-selector.svg"
import { ReactComponent as Share_sm } from "svg/solid-sm/sm-share.svg"
import { ReactComponent as ShieldCheck_sm } from "svg/solid-sm/sm-shield-check.svg"
import { ReactComponent as ShieldExclamation_sm } from "svg/solid-sm/sm-shield-exclamation.svg"
import { ReactComponent as SortAscending_sm } from "svg/solid-sm/sm-sort-ascending.svg"
import { ReactComponent as SortDescending_sm } from "svg/solid-sm/sm-sort-descending.svg"
import { ReactComponent as Sparkles_sm } from "svg/solid-sm/sm-sparkles.svg"
import { ReactComponent as Sun_sm } from "svg/solid-sm/sm-sun.svg"
import { ReactComponent as SwitchHorizontal_sm } from "svg/solid-sm/sm-switch-horizontal.svg"
import { ReactComponent as SwitchVertical_sm } from "svg/solid-sm/sm-switch-vertical.svg"
import { ReactComponent as Tag_sm } from "svg/solid-sm/sm-tag.svg"
import { ReactComponent as Template_sm } from "svg/solid-sm/sm-template.svg"
import { ReactComponent as Ticket_sm } from "svg/solid-sm/sm-ticket.svg"
import { ReactComponent as Translate_sm } from "svg/solid-sm/sm-translate.svg"
import { ReactComponent as Trash_sm } from "svg/solid-sm/sm-trash.svg"
import { ReactComponent as TrendingDown_sm } from "svg/solid-sm/sm-trending-down.svg"
import { ReactComponent as TrendingUp_sm } from "svg/solid-sm/sm-trending-up.svg"
import { ReactComponent as Upload_sm } from "svg/solid-sm/sm-upload.svg"
import { ReactComponent as UserAdd_sm } from "svg/solid-sm/sm-user-add.svg"
import { ReactComponent as UserCircle_sm } from "svg/solid-sm/sm-user-circle.svg"
import { ReactComponent as UserGroup_sm } from "svg/solid-sm/sm-user-group.svg"
import { ReactComponent as UserRemove_sm } from "svg/solid-sm/sm-user-remove.svg"
import { ReactComponent as User_sm } from "svg/solid-sm/sm-user.svg"
import { ReactComponent as Users_sm } from "svg/solid-sm/sm-users.svg"
import { ReactComponent as ViewBoards_sm } from "svg/solid-sm/sm-view-boards.svg"
import { ReactComponent as ViewList_sm } from "svg/solid-sm/sm-view-list.svg"
import { ReactComponent as VolumeOff_sm } from "svg/solid-sm/sm-volume-off.svg"
import { ReactComponent as VolumeUp_sm } from "svg/solid-sm/sm-volume-up.svg"
import { ReactComponent as XCircle_sm } from "svg/solid-sm/sm-x-circle.svg"
import { ReactComponent as X_sm } from "svg/solid-sm/sm-x.svg"
import { ReactComponent as ZoomIn_sm } from "svg/solid-sm/sm-zoom-in.svg"
import { ReactComponent as ZoomOut_sm } from "svg/solid-sm/sm-zoom-out.svg"
/* eslint-enable react/jsx-pascal-case */

import "debug.css"
import "./tailwind.generated.css"

const IconPane = ({ outline_md: A, solid_sm: B, text, ...props }) => (
	<div className="m-1 relative flex-shrink-0 flex flex-col justify-center items-center w-40 h-40 text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded shadow hover:shadow-lg hover:z-30 transition duration-150 ease-in-out">
		<A className="w-8 h-8" />
		<div className="p-3 absolute x-inset-0 bottom-0">
			<p className="font-semibold text-center text-sm leading-tight">
				{text}
			</p>
		</div>
	</div>
)

const App = props => (
	<div className="px-6 flex flex-row justify-center bg-gray-100 min-h-full">
		<div className="-m-px py-24 w-full max-w-screen-lg">
			<h1 className="font-semibold font-poppins tracking-tight text-5xl">
				Heroicons viewer{" "}
				<span className="px-2 py-1 align-text-top tnum font-extrabold font-mono text-sm text-white bg-indigo-500 rounded shadow">
					0.1
				</span>
			</h1>
			<h2 className="my-2 font-semibold text-2xl text-gray-900 -tracking-0.5">
				MIT-licensed, <a className="text-indigo-500 hover:underline">open source iconset</a> by <a className="text-indigo-500 hover:underline">Steve Schoger</a> and <a className="text-indigo-500 hover:underline">Adam Wathan</a><br />
				<a className="text-indigo-500 hover:underline">Viewer</a> created by <a className="text-indigo-500 hover:underline">Zaydek Michels-Gualtieri</a> <span className="emoji">👋</span>
			</h2>
			<div className="p-4 my-12 flex flex-row items-center bg-white rounded shadow">
				<div className="m-4 mr-6 flex-shrink-0">
					<ExclamationCircle_md className="p-px w-8 h-8 text-indigo-500" />
				</div>
				<h3 className="font-medium text-lg text-gray-900 leading-relaxed">
					<strong>Note:</strong> These icons were <a className="font-semibold text-indigo-500 hover:underline">just released</a> and may have bugs. Please <a className="font-semibold text-indigo-500 hover:underline">create an issue here</a> to report a bug related to an icon. And please <a className="font-semibold text-indigo-500 hover:underline">create an issue here</a> to report a bug related to this viewer.
				</h3>
			</div>
			<h2 className="my-4 font-semibold text-lg text-gray-900">
				Outline/Medium icons (other sizes are not released yet)
			</h2>
			<div className="-m-1 flex flex-row flex-wrap items-start">
				<IconPane outline_md={Adjustments_md} solid_sm={Adjustments_sm} text="adjustments" />
				<IconPane outline_md={Annotation_md} solid_sm={Annotation_sm} text="annotation" />
				<IconPane outline_md={Archive_md} solid_sm={Archive_sm} text="archive" />
				<IconPane outline_md={ArrowCircleDown_md} solid_sm={ArrowCircleDown_sm} text="arrow-circle-down" />
				<IconPane outline_md={ArrowCircleLeft_md} solid_sm={ArrowCircleLeft_sm} text="arrow-circle-left" />
				<IconPane outline_md={ArrowCircleRight_md} solid_sm={ArrowCircleRight_sm} text="arrow-circle-right" />
				<IconPane outline_md={ArrowCircleUp_md} solid_sm={ArrowCircleUp_sm} text="arrow-circle-up" />
				<IconPane outline_md={ArrowDown_md} solid_sm={ArrowDown_sm} text="arrow-down" />
				<IconPane outline_md={ArrowLeft_md} solid_sm={ArrowLeft_sm} text="arrow-left" />
				<IconPane outline_md={ArrowNarrowDown_md} solid_sm={ArrowNarrowDown_sm} text="arrow-narrow-down" />
				<IconPane outline_md={ArrowNarrowLeft_md} solid_sm={ArrowNarrowLeft_sm} text="arrow-narrow-left" />
				<IconPane outline_md={ArrowNarrowRight_md} solid_sm={ArrowNarrowRight_sm} text="arrow-narrow-right" />
				<IconPane outline_md={ArrowNarrowUp_md} solid_sm={ArrowNarrowUp_sm} text="arrow-narrow-up" />
				<IconPane outline_md={ArrowRight_md} solid_sm={ArrowRight_sm} text="arrow-right" />
				<IconPane outline_md={ArrowUp_md} solid_sm={ArrowUp_sm} text="arrow-up" />
				<IconPane outline_md={AtSymbol_md} solid_sm={AtSymbol_sm} text="at-symbol" />
				<IconPane outline_md={Bell_md} solid_sm={Bell_sm} text="bell" />
				<IconPane outline_md={BookOpen_md} solid_sm={BookOpen_sm} text="book-open" />
				<IconPane outline_md={Bookmark_md} solid_sm={Bookmark_sm} text="bookmark" />
				<IconPane outline_md={Briefcase_md} solid_sm={Briefcase_sm} text="briefcase" />
				<IconPane outline_md={Calendar_md} solid_sm={Calendar_sm} text="calendar" />
				<IconPane outline_md={Camera_md} solid_sm={Camera_sm} text="camera" />
				<IconPane outline_md={Cash_md} solid_sm={Cash_sm} text="cash" />
				<IconPane outline_md={ChartPie_md} solid_sm={ChartPie_sm} text="chart-pie" />
				<IconPane outline_md={Chat_md} solid_sm={Chat_sm} text="chat" />
				<IconPane outline_md={CheckCircle_md} solid_sm={CheckCircle_sm} text="check-circle" />
				<IconPane outline_md={Check_md} solid_sm={Check_sm} text="check" />
				<IconPane outline_md={CheveronDown_md} solid_sm={CheveronDown_sm} text="cheveron-down" />
				<IconPane outline_md={CheveronLeft_md} solid_sm={CheveronLeft_sm} text="cheveron-left" />
				<IconPane outline_md={CheveronRight_md} solid_sm={CheveronRight_sm} text="cheveron-right" />
				<IconPane outline_md={CheveronUp_md} solid_sm={CheveronUp_sm} text="cheveron-up" />
				<IconPane outline_md={ClipboardCheck_md} solid_sm={ClipboardCheck_sm} text="clipboard-check" />
				<IconPane outline_md={ClipboardCopy_md} solid_sm={ClipboardCopy_sm} text="clipboard-copy" />
				<IconPane outline_md={ClipboardList_md} solid_sm={ClipboardList_sm} text="clipboard-list" />
				<IconPane outline_md={Clipboard_md} solid_sm={Clipboard_sm} text="clipboard" />
				<IconPane outline_md={Clock_md} solid_sm={Clock_sm} text="clock" />
				<IconPane outline_md={CloudDownload_md} solid_sm={CloudDownload_sm} text="cloud-download" />
				<IconPane outline_md={CloudUpload_md} solid_sm={CloudUpload_sm} text="cloud-upload" />
				<IconPane outline_md={Code_md} solid_sm={Code_sm} text="code" />
				<IconPane outline_md={Cog_md} solid_sm={Cog_sm} text="cog" />
				<IconPane outline_md={Collection_md} solid_sm={Collection_sm} text="collection" />
				<IconPane outline_md={ColorSwatch_md} solid_sm={ColorSwatch_sm} text="color-swatch" />
				<IconPane outline_md={CreditCard_md} solid_sm={CreditCard_sm} text="credit-card" />
				<IconPane outline_md={CurrencyDollar_md} solid_sm={CurrencyDollar_sm} text="currency-dollar" />
				<IconPane outline_md={CurrencyEuro_md} solid_sm={CurrencyEuro_sm} text="currency-euro" />
				<IconPane outline_md={CurrencyPound_md} solid_sm={CurrencyPound_sm} text="currency-pound" />
				<IconPane outline_md={CurrencyRupee_md} solid_sm={CurrencyRupee_sm} text="currency-rupee" />
				<IconPane outline_md={CurrencyYen_md} solid_sm={CurrencyYen_sm} text="currency-yen" />
				<IconPane outline_md={DocumentAdd_md} solid_sm={DocumentAdd_sm} text="document-add" />
				<IconPane outline_md={DocumentDownload_md} solid_sm={DocumentDownload_sm} text="document-download" />
				<IconPane outline_md={DocumentDuplicate_md} solid_sm={DocumentDuplicate_sm} text="document-duplicate" />
				<IconPane outline_md={DocumentRemove_md} solid_sm={DocumentRemove_sm} text="document-remove" />
				<IconPane outline_md={Document_md} solid_sm={Document_sm} text="document" />
				<IconPane outline_md={DotsCircleHorizontal_md} solid_sm={DotsCircleHorizontal_sm} text="dots-circle-horizontal" />
				<IconPane outline_md={DotsHorizontal_md} solid_sm={DotsHorizontal_sm} text="dots-horizontal" />
				<IconPane outline_md={DotsVertical_md} solid_sm={DotsVertical_sm} text="dots-vertical" />
				<IconPane outline_md={Download_md} solid_sm={Download_sm} text="download" />
				<IconPane outline_md={Duplicate_md} solid_sm={Duplicate_sm} text="duplicate" />
				<IconPane outline_md={EmojiHappy_md} solid_sm={EmojiHappy_sm} text="emoji-happy" />
				<IconPane outline_md={EmojiSad_md} solid_sm={EmojiSad_sm} text="emoji-sad" />
				<IconPane outline_md={ExclamationCircle_md} solid_sm={ExclamationCircle_sm} text="exclamation-circle" />
				<IconPane outline_md={Exclamation_md} solid_sm={Exclamation_sm} text="exclamation" />
				<IconPane outline_md={ExternalLink_md} solid_sm={ExternalLink_sm} text="external-link" />
				<IconPane outline_md={Eye_md} solid_sm={Eye_sm} text="eye" />
				<IconPane outline_md={Filter_md} solid_sm={Filter_sm} text="filter" />
				<IconPane outline_md={Flag_md} solid_sm={Flag_sm} text="flag" />
				<IconPane outline_md={Folder_md} solid_sm={Folder_sm} text="folder" />
				<IconPane outline_md={GlobeAlt_md} solid_sm={GlobeAlt_sm} text="globe-alt" />
				<IconPane outline_md={Globe_md} solid_sm={Globe_sm} text="globe" />
				<IconPane outline_md={Hashtag_md} solid_sm={Hashtag_sm} text="hashtag" />
				<IconPane outline_md={Heart_md} solid_sm={Heart_sm} text="heart" />
				<IconPane outline_md={Home_md} solid_sm={Home_sm} text="home" />
				<IconPane outline_md={InboxIn_md} solid_sm={InboxIn_sm} text="inbox-in" />
				<IconPane outline_md={Inbox_md} solid_sm={Inbox_sm} text="inbox" />
				<IconPane outline_md={InformationCircle_md} solid_sm={InformationCircle_sm} text="information-circle" />
				<IconPane outline_md={LightBulb_md} solid_sm={LightBulb_sm} text="light-bulb" />
				<IconPane outline_md={LightningBolt_md} solid_sm={LightningBolt_sm} text="lightning-bolt" />
				<IconPane outline_md={Link_md} solid_sm={Link_sm} text="link" />
				<IconPane outline_md={LocationMarker_md} solid_sm={LocationMarker_sm} text="location-marker" />
				<IconPane outline_md={LockClosed_md} solid_sm={LockClosed_sm} text="lock-closed" />
				<IconPane outline_md={LockOpen_md} solid_sm={LockOpen_sm} text="lock-open" />
				<IconPane outline_md={MailOpen_md} solid_sm={MailOpen_sm} text="mail-open" />
				<IconPane outline_md={Mail_md} solid_sm={Mail_sm} text="mail" />
				<IconPane outline_md={MenuAlt1_md} solid_sm={MenuAlt1_sm} text="menu-alt-1" />
				<IconPane outline_md={MenuAlt2_md} solid_sm={MenuAlt2_sm} text="menu-alt-2" />
				<IconPane outline_md={MenuAlt3_md} solid_sm={MenuAlt3_sm} text="menu-alt-3" />
				<IconPane outline_md={MenuAlt4_md} solid_sm={MenuAlt4_sm} text="menu-alt-4" />
				<IconPane outline_md={Menu_md} solid_sm={Menu_sm} text="menu" />
				<IconPane outline_md={MinusCircle_md} solid_sm={MinusCircle_sm} text="minus-circle" />
				<IconPane outline_md={Moon_md} solid_sm={Moon_sm} text="moon" />
				<IconPane outline_md={OfficeBuilding_md} solid_sm={OfficeBuilding_sm} text="office-building" />
				<IconPane outline_md={PaperClip_md} solid_sm={PaperClip_sm} text="paper-clip" />
				<IconPane outline_md={PencilAlt_md} solid_sm={PencilAlt_sm} text="pencil-alt" />
				<IconPane outline_md={Pencil_md} solid_sm={Pencil_sm} text="pencil" />
				<IconPane outline_md={PhoneIncoming_md} solid_sm={PhoneIncoming_sm} text="phone-incoming" />
				<IconPane outline_md={PhoneOutgoing_md} solid_sm={PhoneOutgoing_sm} text="phone-outgoing" />
				<IconPane outline_md={Phone_md} solid_sm={Phone_sm} text="phone" />
				<IconPane outline_md={Photograph_md} solid_sm={Photograph_sm} text="photograph" />
				<IconPane outline_md={PlusCircle_md} solid_sm={PlusCircle_sm} text="plus-circle" />
				<IconPane outline_md={Plus_md} solid_sm={Plus_sm} text="plus" />
				<IconPane outline_md={Printer_md} solid_sm={Printer_sm} text="printer" />
				<IconPane outline_md={Qrcode_md} solid_sm={Qrcode_sm} text="qrcode" />
				<IconPane outline_md={QuestionMarkCircle_md} solid_sm={QuestionMarkCircle_sm} text="question-mark-circle" />
				<IconPane outline_md={ReceiptRefund_md} solid_sm={ReceiptRefund_sm} text="receipt-refund" />
				<IconPane outline_md={Refresh_md} solid_sm={Refresh_sm} text="refresh" />
				<IconPane outline_md={Reply_md} solid_sm={Reply_sm} text="reply" />
				<IconPane outline_md={Scale_md} solid_sm={Scale_sm} text="scale" />
				<IconPane outline_md={Search_md} solid_sm={Search_sm} text="search" />
				<IconPane outline_md={Selector_md} solid_sm={Selector_sm} text="selector" />
				<IconPane outline_md={Share_md} solid_sm={Share_sm} text="share" />
				<IconPane outline_md={ShieldCheck_md} solid_sm={ShieldCheck_sm} text="shield-check" />
				<IconPane outline_md={ShieldExclamation_md} solid_sm={ShieldExclamation_sm} text="shield-exclamation" />
				<IconPane outline_md={SortAscending_md} solid_sm={SortAscending_sm} text="sort-ascending" />
				<IconPane outline_md={SortDescending_md} solid_sm={SortDescending_sm} text="sort-descending" />
				<IconPane outline_md={Sparkles_md} solid_sm={Sparkles_sm} text="sparkles" />
				<IconPane outline_md={Sun_md} solid_sm={Sun_sm} text="sun" />
				<IconPane outline_md={SwitchHorizontal_md} solid_sm={SwitchHorizontal_sm} text="switch-horizontal" />
				<IconPane outline_md={SwitchVertical_md} solid_sm={SwitchVertical_sm} text="switch-vertical" />
				<IconPane outline_md={Tag_md} solid_sm={Tag_sm} text="tag" />
				<IconPane outline_md={Template_md} solid_sm={Template_sm} text="template" />
				<IconPane outline_md={Ticket_md} solid_sm={Ticket_sm} text="ticket" />
				<IconPane outline_md={Translate_md} solid_sm={Translate_sm} text="translate" />
				<IconPane outline_md={Trash_md} solid_sm={Trash_sm} text="trash" />
				<IconPane outline_md={TrendingDown_md} solid_sm={TrendingDown_sm} text="trending-down" />
				<IconPane outline_md={TrendingUp_md} solid_sm={TrendingUp_sm} text="trending-up" />
				<IconPane outline_md={Upload_md} solid_sm={Upload_sm} text="upload" />
				<IconPane outline_md={UserAdd_md} solid_sm={UserAdd_sm} text="user-add" />
				<IconPane outline_md={UserCircle_md} solid_sm={UserCircle_sm} text="user-circle" />
				<IconPane outline_md={UserGroup_md} solid_sm={UserGroup_sm} text="user-group" />
				<IconPane outline_md={UserRemove_md} solid_sm={UserRemove_sm} text="user-remove" />
				<IconPane outline_md={User_md} solid_sm={User_sm} text="user" />
				<IconPane outline_md={Users_md} solid_sm={Users_sm} text="users" />
				<IconPane outline_md={ViewBoards_md} solid_sm={ViewBoards_sm} text="view-boards" />
				<IconPane outline_md={ViewList_md} solid_sm={ViewList_sm} text="view-list" />
				<IconPane outline_md={VolumeOff_md} solid_sm={VolumeOff_sm} text="volume-off" />
				<IconPane outline_md={VolumeUp_md} solid_sm={VolumeUp_sm} text="volume-up" />
				<IconPane outline_md={XCircle_md} solid_sm={XCircle_sm} text="x-circle" />
				<IconPane outline_md={X_md} solid_sm={X_sm} text="x" />
				<IconPane outline_md={ZoomIn_md} solid_sm={ZoomIn_sm} text="zoom-in" />
				<IconPane outline_md={ZoomOut_md} solid_sm={ZoomOut_sm} text="zoom-out" />
			</div>
		</div>
		{/* <CSSDebugger /> */}
	</div>
)

export default App
