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

import "./tailwind.generated.css"
import "debug.css"

const Icon = ({ svg: SVG, ...props }) => (
	<SVG {...props} />
)

const IconPane = ({ svg, text, ...props }) => (
	<div className="m-px relative flex-shrink-0 flex flex-col justify-center items-center w-40 h-40 text-gray-800 hover:text-white bg-white hover:bg-indigo-500 rounded-md hover:shadow-md hover:z-30 transition duration-150 ease-in-out">
		<Icon className="w-8 h-8" svg={svg} />
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
			<h1 className="font-bold text-5xl">
				Heroicons viewer{" "}
				<div className="inline-block w-8 h-8 align-text-middle text-indigo-500">
					<LightningBolt_sm />
				</div>
			</h1>
			<div className="h-2" />
			<h2 className="font-semibold text-2xl text-gray-900">
				An <a className="hover:underline text-indigo-500">MIT-licensed</a>, <a className="hover:underline text-indigo-500">open source</a> iconset by <a className="hover:underline text-indigo-500">Adam Wathan</a> and <a className="hover:underline text-indigo-500">Steve Schover</a><br />
				Viewer created by <a className="hover:underline text-indigo-500">Zaydek Michels-Gualtieri</a>. <a className="hover:underline text-indigo-500">Source here</a>.
			</h2>
			<div className="h-8" />
			<h3 className="font-medium text-lg text-gray-900">
				<strong className="font-500">Note:</strong> These icons were <em>just</em> released and may have bugs. Please <a className="hover:underline text-indigo-500">create an issue here</a> to report a bug related to an icon. And please <a className="hover:underline text-indigo-500">create an issue here</a> to report a bug related to this viewer.
			</h3>
			<div className="h-8" />
			<div className="flex flex-row flex-wrap items-start">
				<IconPane
					svg={Adjustments_md}
					text="adjustments"
				/>
				<IconPane
					svg={Annotation_md}
					text="annotation"
				/>
				<IconPane
					svg={Archive_md}
					text="archive"
				/>
				<IconPane
					svg={ArrowCircleDown_md}
					text="arrow-circle-down"
				/>
				<IconPane
					svg={ArrowCircleLeft_md}
					text="arrow-circle-left"
				/>
				<IconPane
					svg={ArrowCircleRight_md}
					text="arrow-circle-right"
				/>
				<IconPane
					svg={ArrowCircleUp_md}
					text="arrow-circle-up"
				/>
				<IconPane
					svg={ArrowDown_md}
					text="arrow-down"
				/>
				<IconPane
					svg={ArrowLeft_md}
					text="arrow-left"
				/>
				<IconPane
					svg={ArrowNarrowDown_md}
					text="arrow-narrow-down"
				/>
				<IconPane
					svg={ArrowNarrowLeft_md}
					text="arrow-narrow-left"
				/>
				<IconPane
					svg={ArrowNarrowRight_md}
					text="arrow-narrow-right"
				/>
				<IconPane
					svg={ArrowNarrowUp_md}
					text="arrow-narrow-up"
				/>
				<IconPane
					svg={ArrowRight_md}
					text="arrow-right"
				/>
				<IconPane
					svg={ArrowUp_md}
					text="arrow-up"
				/>
				<IconPane
					svg={AtSymbol_md}
					text="at-symbol"
				/>
				<IconPane
					svg={Bell_md}
					text="bell"
				/>
				<IconPane
					svg={BookOpen_md}
					text="book-open"
				/>
				<IconPane
					svg={Bookmark_md}
					text="bookmark"
				/>
				<IconPane
					svg={Briefcase_md}
					text="briefcase"
				/>
				<IconPane
					svg={Calendar_md}
					text="calendar"
				/>
				<IconPane
					svg={Camera_md}
					text="camera"
				/>
				<IconPane
					svg={Cash_md}
					text="cash"
				/>
				<IconPane
					svg={ChartPie_md}
					text="chart-pie"
				/>
				<IconPane
					svg={Chat_md}
					text="chat"
				/>
				<IconPane
					svg={CheckCircle_md}
					text="check-circle"
				/>
				<IconPane
					svg={Check_md}
					text="check"
				/>
				<IconPane
					svg={CheveronDown_md}
					text="cheveron-down"
				/>
				<IconPane
					svg={CheveronLeft_md}
					text="cheveron-left"
				/>
				<IconPane
					svg={CheveronRight_md}
					text="cheveron-right"
				/>
				<IconPane
					svg={CheveronUp_md}
					text="cheveron-up"
				/>
				<IconPane
					svg={ClipboardCheck_md}
					text="clipboard-check"
				/>
				<IconPane
					svg={ClipboardCopy_md}
					text="clipboard-copy"
				/>
				<IconPane
					svg={ClipboardList_md}
					text="clipboard-list"
				/>
				<IconPane
					svg={Clipboard_md}
					text="clipboard"
				/>
				<IconPane
					svg={Clock_md}
					text="clock"
				/>
				<IconPane
					svg={CloudDownload_md}
					text="cloud-download"
				/>
				<IconPane
					svg={CloudUpload_md}
					text="cloud-upload"
				/>
				<IconPane
					svg={Code_md}
					text="code"
				/>
				<IconPane
					svg={Cog_md}
					text="cog"
				/>
				<IconPane
					svg={Collection_md}
					text="collection"
				/>
				<IconPane
					svg={ColorSwatch_md}
					text="color-swatch"
				/>
				<IconPane
					svg={CreditCard_md}
					text="credit-card"
				/>
				<IconPane
					svg={CurrencyDollar_md}
					text="currency-dollar"
				/>
				<IconPane
					svg={CurrencyEuro_md}
					text="currency-euro"
				/>
				<IconPane
					svg={CurrencyPound_md}
					text="currency-pound"
				/>
				<IconPane
					svg={CurrencyRupee_md}
					text="currency-rupee"
				/>
				<IconPane
					svg={CurrencyYen_md}
					text="currency-yen"
				/>
				<IconPane
					svg={DocumentAdd_md}
					text="document-add"
				/>
				<IconPane
					svg={DocumentDownload_md}
					text="document-download"
				/>
				<IconPane
					svg={DocumentDuplicate_md}
					text="document-duplicate"
				/>
				<IconPane
					svg={DocumentRemove_md}
					text="document-remove"
				/>
				<IconPane
					svg={Document_md}
					text="document"
				/>
				<IconPane
					svg={DotsCircleHorizontal_md}
					text="dots-circle-horizontal"
				/>
				<IconPane
					svg={DotsHorizontal_md}
					text="dots-horizontal"
				/>
				<IconPane
					svg={DotsVertical_md}
					text="dots-vertical"
				/>
				<IconPane
					svg={Download_md}
					text="download"
				/>
				<IconPane
					svg={Duplicate_md}
					text="duplicate"
				/>
				<IconPane
					svg={EmojiHappy_md}
					text="emoji-happy"
				/>
				<IconPane
					svg={EmojiSad_md}
					text="emoji-sad"
				/>
				<IconPane
					svg={ExclamationCircle_md}
					text="exclamation-circle"
				/>
				<IconPane
					svg={Exclamation_md}
					text="exclamation"
				/>
				<IconPane
					svg={ExternalLink_md}
					text="external-link"
				/>
				<IconPane
					svg={Eye_md}
					text="eye"
				/>
				<IconPane
					svg={Filter_md}
					text="filter"
				/>
				<IconPane
					svg={Flag_md}
					text="flag"
				/>
				<IconPane
					svg={Folder_md}
					text="folder"
				/>
				<IconPane
					svg={GlobeAlt_md}
					text="globe-alt"
				/>
				<IconPane
					svg={Globe_md}
					text="globe"
				/>
				<IconPane
					svg={Hashtag_md}
					text="hashtag"
				/>
				<IconPane
					svg={Heart_md}
					text="heart"
				/>
				<IconPane
					svg={Home_md}
					text="home"
				/>
				<IconPane
					svg={InboxIn_md}
					text="inbox-in"
				/>
				<IconPane
					svg={Inbox_md}
					text="inbox"
				/>
				<IconPane
					svg={InformationCircle_md}
					text="information-circle"
				/>
				<IconPane
					svg={LightBulb_md}
					text="light-bulb"
				/>
				<IconPane
					svg={LightningBolt_md}
					text="lightning-bolt"
				/>
				<IconPane
					svg={Link_md}
					text="link"
				/>
				<IconPane
					svg={LocationMarker_md}
					text="location-marker"
				/>
				<IconPane
					svg={LockClosed_md}
					text="lock-closed"
				/>
				<IconPane
					svg={LockOpen_md}
					text="lock-open"
				/>
				<IconPane
					svg={MailOpen_md}
					text="mail-open"
				/>
				<IconPane
					svg={Mail_md}
					text="mail"
				/>
				<IconPane
					svg={MenuAlt1_md}
					text="menu-alt-1"
				/>
				<IconPane
					svg={MenuAlt2_md}
					text="menu-alt-2"
				/>
				<IconPane
					svg={MenuAlt3_md}
					text="menu-alt-3"
				/>
				<IconPane
					svg={MenuAlt4_md}
					text="menu-alt-4"
				/>
				<IconPane
					svg={Menu_md}
					text="menu"
				/>
				<IconPane
					svg={MinusCircle_md}
					text="minus-circle"
				/>
				<IconPane
					svg={Moon_md}
					text="moon"
				/>
				<IconPane
					svg={OfficeBuilding_md}
					text="office-building"
				/>
				<IconPane
					svg={PaperClip_md}
					text="paper-clip"
				/>
				<IconPane
					svg={PencilAlt_md}
					text="pencil-alt"
				/>
				<IconPane
					svg={Pencil_md}
					text="pencil"
				/>
				<IconPane
					svg={PhoneIncoming_md}
					text="phone-incoming"
				/>
				<IconPane
					svg={PhoneOutgoing_md}
					text="phone-outgoing"
				/>
				<IconPane
					svg={Phone_md}
					text="phone"
				/>
				<IconPane
					svg={Photograph_md}
					text="photograph"
				/>
				<IconPane
					svg={PlusCircle_md}
					text="plus-circle"
				/>
				<IconPane
					svg={Plus_md}
					text="plus"
				/>
				<IconPane
					svg={Printer_md}
					text="printer"
				/>
				<IconPane
					svg={Qrcode_md}
					text="qrcode"
				/>
				<IconPane
					svg={QuestionMarkCircle_md}
					text="question-mark-circle"
				/>
				<IconPane
					svg={ReceiptRefund_md}
					text="receipt-refund"
				/>
				<IconPane
					svg={Refresh_md}
					text="refresh"
				/>
				<IconPane
					svg={Reply_md}
					text="reply"
				/>
				<IconPane
					svg={Scale_md}
					text="scale"
				/>
				<IconPane
					svg={Search_md}
					text="search"
				/>
				<IconPane
					svg={Selector_md}
					text="selector"
				/>
				<IconPane
					svg={Share_md}
					text="share"
				/>
				<IconPane
					svg={ShieldCheck_md}
					text="shield-check"
				/>
				<IconPane
					svg={ShieldExclamation_md}
					text="shield-exclamation"
				/>
				<IconPane
					svg={SortAscending_md}
					text="sort-ascending"
				/>
				<IconPane
					svg={SortDescending_md}
					text="sort-descending"
				/>
				<IconPane
					svg={Sparkles_md}
					text="sparkles"
				/>
				<IconPane
					svg={Sun_md}
					text="sun"
				/>
				<IconPane
					svg={SwitchHorizontal_md}
					text="switch-horizontal"
				/>
				<IconPane
					svg={SwitchVertical_md}
					text="switch-vertical"
				/>
				<IconPane
					svg={Tag_md}
					text="tag"
				/>
				<IconPane
					svg={Template_md}
					text="template"
				/>
				<IconPane
					svg={Ticket_md}
					text="ticket"
				/>
				<IconPane
					svg={Translate_md}
					text="translate"
				/>
				<IconPane
					svg={Trash_md}
					text="trash"
				/>
				<IconPane
					svg={TrendingDown_md}
					text="trending-down"
				/>
				<IconPane
					svg={TrendingUp_md}
					text="trending-up"
				/>
				<IconPane
					svg={Upload_md}
					text="upload"
				/>
				<IconPane
					svg={UserAdd_md}
					text="user-add"
				/>
				<IconPane
					svg={UserCircle_md}
					text="user-circle"
				/>
				<IconPane
					svg={UserGroup_md}
					text="user-group"
				/>
				<IconPane
					svg={UserRemove_md}
					text="user-remove"
				/>
				<IconPane
					svg={User_md}
					text="user"
				/>
				<IconPane
					svg={Users_md}
					text="users"
				/>
				<IconPane
					svg={ViewBoards_md}
					text="view-boards"
				/>
				<IconPane
					svg={ViewList_md}
					text="view-list"
				/>
				<IconPane
					svg={VolumeOff_md}
					text="volume-off"
				/>
				<IconPane
					svg={VolumeUp_md}
					text="volume-up"
				/>
				<IconPane
					svg={XCircle_md}
					text="x-circle"
				/>
				<IconPane
					svg={X_md}
					text="x"
				/>
				<IconPane
					svg={ZoomIn_md}
					text="zoom-in"
				/>
				<IconPane
					svg={ZoomOut_md}
					text="zoom-out"
				/>
			</div>
		</div>
		{/* <CSSDebugger /> */}
	</div>
)

export default App
