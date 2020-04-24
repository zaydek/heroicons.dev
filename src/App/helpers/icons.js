import * as Hero from "react-heroicons"

// Recurisvely flattens an array
function flatten(array) {
	const flat = []
	for (let index = 0; index < array.length; index++) {
		if (Array.isArray(array[index])) {
			flat.push(...flatten(array[index]))
			continue
		}
		flat.push(array[index])
	}
	return flat
}

// Registers tags; accepts an array of strings or arrays and
// recursively flattens and dedupes them.
function registerTags(...tags) {
	return [...new Set(flatten(tags))]
}

const categories = {
	// Reserved
	new: [
		"new",
	],

	add: [
		"add",
		"create",
	],
	arrows: [
		"arrows",
	],
	chatAsync: [
		"commenting",
		"discussing",
		"messaging",
		"thinking",
		"typing",
		"writing",
	],
	chatSync: [
		"comment",
		"discuss",
		"message",
		"think",
		"type",
		"write",
	],
	copypasta: [
		"clipboard",
		"duplciate",
		"cut",
		"copy",
		"paste",
	],
	currency: [
		"currency",
		"exchange rate",
		"money",
	],
	// TODO: Add a space category -- globe, globe-alt,
	// sparkles, etc.
	darkMode: [
		"dark mode",
		"day",
		"light mode",
		"moon",
		"night",
		"sky",
		"start",
		"sun",
	],
	delete: [
		"alert",
		"cancel",
		"deactivate",
		"delete",
		"destroy",
		"minus",
		"remove",
		"warning",
		"x",
	],
	edit: [
		"edit",
		"modify",
		"save",
		"update",
	],
	ellisis: [
		"dots",
		"ellisis",
	],
	email: [
		"email",
		"mail",
	],
	emotions: [
		"emoji",
		"emotions",
		"happy",
		"negative",
		"positive",
		"sad",
	],
	file: [
		"document",
		"file",
	],
	folder: [
		"archive",
		"bin",
		"folder",
		"storage",
	],
	formatting: [
		"align",
		"column",
		"format",
		"formatting",
		"justify",
		"row",
	],
	layout: [
		"column",
		"grid",
		"layout",
		"row",
	],
	more: [
		"actions",
		"more",
		"options",
	],
	notifications: [
		"alerts",
		"announcements",
		"notifications",
	],
	password: [
		"password",
	],
	people: [
		"member",
		"people",
		"person",
		"user",
	],
	phone: [
		"call",
		"cell phone",
		"mobile",
		"phone",
	],
	photography: [
		"camera",
		"photo",
		"photography",
		"picture",
	],
	pointer: [
		"cursor",
		"mouse",
		"pointer",
	],
	settings: [
		"controls",
		"preferences",
		"settings",
	],
	share: [
		"anchor",
		"link",
		"share",
		"social",
	],
	shopping: [
		"buy",
		"cart",
		"price tag",
		"shopping cart",
	],
	stats: [
		"chart",
		"data",
		"report",
		"spreadsheet",
		"statistics",
		"stats",
	],
	verified: [
		"check",
		"verified",
		"verify",
	],
	world: [
		"earth",
		"globe",
		"planet",
		"world",
	],
}

// new
// add
// arrows
// chatAsync
// chatSync
// copypasta
// currency
// darkMode
// delete
// edit
// ellisis
// email
// emotions
// file
// folder
// formatting
// layout
// more
// notifications
// password
// people
// phone
// photography
// pointer
// settings
// share
// shopping
// stats
// verified
// world

// TODO:
//
// registerIcon({
// 	name: "...",
// 	tags: "...",
// })

// createIcon("adjustments", Hero.AdjustmentsOutlineMd, Hero.AdjustmentsSolidSm)

function newIcon({ name, categories, outline, solid, status }) {
	const info = {
		name,
		tags: registerTags(name, ...name.split("-"), ...categories),
		outline,
		solid,
		status,
	}
	return info
}

const originalIcons = [
	newIcon({
		name: "adjustments",
		categories: [categories.settings, "sliders"],
		outline: Hero.AdjustmentsOutlineMd,
		solid: Hero.AdjustmentsSolidSm,
	}),
	newIcon({
		name: "annotation",
		categories: [categories.notifications, "subtitles", "tooltip"],
		outline: Hero.AnnotationOutlineMd,
		solid: Hero.AnnotationSolidSm,
	}),
	newIcon({
		name: "archive",
		categories: [categories.folder],
		outline: Hero.ArchiveOutlineMd,
		solid: Hero.ArchiveSolidSm,
	}),
	newIcon({
		name: "arrow-circle-down",
		categories: [],
		outline: Hero.ArrowCircleDownOutlineMd,
		solid: Hero.ArrowCircleDownSolidSm,
	}),
	newIcon({
		name: "arrow-circle-left",
		categories: [],
		outline: Hero.ArrowCircleLeftOutlineMd,
		solid: Hero.ArrowCircleLeftSolidSm,
	}),
	newIcon({
		name: "arrow-circle-right",
		categories: [],
		outline: Hero.ArrowCircleRightOutlineMd,
		solid: Hero.ArrowCircleRightSolidSm,
	}),
	newIcon({
		name: "arrow-circle-up",
		categories: [],
		outline: Hero.ArrowCircleUpOutlineMd,
		solid: Hero.ArrowCircleUpSolidSm,
	}),
	newIcon({
		name: "arrow-down",
		categories: [categories.arrows],
		outline: Hero.ArrowDownOutlineMd,
		solid: Hero.ArrowDownSolidSm,
	}),
	newIcon({
		name: "arrow-left",
		categories: [categories.arrows],
		outline: Hero.ArrowLeftOutlineMd,
		solid: Hero.ArrowLeftSolidSm,
	}),
	newIcon({
		name: "arrow-narrow-down",
		categories: [categories.arrows],
		outline: Hero.ArrowNarrowDownOutlineMd,
		solid: Hero.ArrowNarrowDownSolidSm,
	}),
	newIcon({
		name: "arrow-narrow-left",
		categories: [categories.arrows],
		outline: Hero.ArrowNarrowLeftOutlineMd,
		solid: Hero.ArrowNarrowLeftSolidSm,
	}),
	newIcon({
		name: "arrow-narrow-right",
		categories: [categories.arrows],
		outline: Hero.ArrowNarrowRightOutlineMd,
		solid: Hero.ArrowNarrowRightSolidSm,
	}),
	newIcon({
		name: "arrow-narrow-up",
		categories: [categories.arrows],
		outline: Hero.ArrowNarrowUpOutlineMd,
		solid: Hero.ArrowNarrowUpSolidSm,
	}),
	newIcon({
		name: "arrow-right",
		categories: [categories.arrows],
		outline: Hero.ArrowRightOutlineMd,
		solid: Hero.ArrowRightSolidSm,
	}),
	newIcon({
		name: "arrow-up",
		categories: [categories.arrows],
		outline: Hero.ArrowUpOutlineMd,
		solid: Hero.ArrowUpSolidSm,
	}),
	newIcon({
		name: "at-symbol",
		categories: [categories.email],
		outline: Hero.AtSymbolOutlineMd,
		solid: Hero.AtSymbolSolidSm,
	}),
	newIcon({
		name: "badge-check",
		categories: [categories.verified],
		outline: Hero.BadgeCheckOutlineMd,
		solid: Hero.BadgeCheckSolidSm,
	}),
	newIcon({
		name: "ban",
		categories: [categories.delete, "disabled"],
		outline: Hero.BanOutlineMd,
		solid: Hero.BanSolidSm,
	}),
	newIcon({
		name: "bell",
		categories: [categories.notifications],
		outline: Hero.BellOutlineMd,
		solid: Hero.BellSolidSm,
	}),
	newIcon({
		name: "book-open",
		categories: ["book", "chapter", "diary", "journal", "read"],
		outline: Hero.BookOpenOutlineMd,
		solid: Hero.BookOpenSolidSm,
	}),
	newIcon({
		name: "bookmark",
		categories: ["book", "chapter", "diary", "journal", "read"],
		outline: Hero.BookmarkOutlineMd,
		solid: Hero.BookmarkSolidSm,
	}),
	newIcon({
		name: "bookmark-alt",
		categories: [categories.new, "book", "chapter", "diary", "journal", "read"],
		outline: Hero.BookmarkAltOutlineMd,
		solid: Hero.BookmarkAltSolidSm,
		status: "new",
	}),
	newIcon({
		name: "briefcase",
		categories: [],
		outline: Hero.BriefcaseOutlineMd,
		solid: Hero.BriefcaseSolidSm,
	}),
	newIcon({
		name: "calendar",
		categories: ["events", "days", "months", "years"],
		outline: Hero.CalendarOutlineMd,
		solid: Hero.CalendarSolidSm,
	}),
	newIcon({
		name: "camera",
		categories: [categories.photography],
		outline: Hero.CameraOutlineMd,
		solid: Hero.CameraSolidSm,
	}),
	newIcon({
		name: "cash",
		categories: [categories.currency],
		outline: Hero.CashOutlineMd,
		solid: Hero.CashSolidSm,
	}),
	newIcon({
		name: "chart-bar",
		categories: [categories.new, categories.stats],
		outline: Hero.ChartBarOutlineMd,
		solid: Hero.ChartBarSolidSm,
		status: "new",
	}),
	newIcon({
		name: "chart-pie",
		categories: [categories.stats],
		outline: Hero.ChartPieOutlineMd,
		solid: Hero.ChartPieSolidSm,
	}),
	newIcon({
		name: "chart-square-bar",
		categories: [categories.new, categories.stats],
		outline: Hero.ChartSquareBarOutlineMd,
		solid: Hero.ChartSquareBarSolidSm,
		status: "new",
	}),
	newIcon({
		name: "chat",
		categories: [categories.chatAsync, categories.chatSync, categories.ellisis],
		outline: Hero.ChatOutlineMd,
		solid: Hero.ChatSolidSm,
	}),
	newIcon({
		name: "chat-alt",
		categories: [categories.chatAsync, categories.chatSync, categories.ellisis],
		outline: Hero.ChatAltOutlineMd,
		solid: Hero.ChatAltSolidSm,
	}),
	newIcon({
		name: "chat-alt-2",
		categories: [categories.new, categories.chatAsync, categories.chatSync],
		outline: Hero.ChatAlt2OutlineMd,
		solid: Hero.ChatAlt2SolidSm,
		status: "new",
	}),
	newIcon({
		name: "check",
		categories: [categories.verified],
		outline: Hero.CheckOutlineMd,
		solid: Hero.CheckSolidSm,
	}),
	newIcon({
		name: "check-circle",
		categories: [categories.verified],
		outline: Hero.CheckCircleOutlineMd,
		solid: Hero.CheckCircleSolidSm,
	}),
	newIcon({
		name: "cheveron-down",
		categories: [],
		outline: Hero.CheveronDownOutlineMd,
		solid: Hero.CheveronDownSolidSm,
	}),
	newIcon({
		name: "cheveron-left",
		categories: [],
		outline: Hero.CheveronLeftOutlineMd,
		solid: Hero.CheveronLeftSolidSm,
	}),
	newIcon({
		name: "cheveron-right",
		categories: [],
		outline: Hero.CheveronRightOutlineMd,
		solid: Hero.CheveronRightSolidSm,
	}),
	newIcon({
		name: "cheveron-up",
		categories: [],
		outline: Hero.CheveronUpOutlineMd,
		solid: Hero.CheveronUpSolidSm,
	}),
	newIcon({
		name: "clipboard",
		categories: [categories.copypasta],
		outline: Hero.ClipboardOutlineMd,
		solid: Hero.ClipboardSolidSm,
	}),
	newIcon({
		name: "clipboard-check",
		categories: [categories.copypasta],
		outline: Hero.ClipboardCheckOutlineMd,
		solid: Hero.ClipboardCheckSolidSm,
	}),
	newIcon({
		name: "clipboard-copy",
		categories: [categories.copypasta],
		outline: Hero.ClipboardCopyOutlineMd,
		solid: Hero.ClipboardCopySolidSm,
	}),
	newIcon({
		name: "clipboard-list",
		categories: [categories.copypasta],
		outline: Hero.ClipboardListOutlineMd,
		solid: Hero.ClipboardListSolidSm,
	}),
	newIcon({
		name: "clock",
		categories: ["time"],
		outline: Hero.ClockOutlineMd,
		solid: Hero.ClockSolidSm,
	}),
	newIcon({
		name: "cloud-download",
		categories: [],
		outline: Hero.CloudDownloadOutlineMd,
		solid: Hero.CloudDownloadSolidSm,
	}),
	newIcon({
		name: "cloud-upload",
		categories: [],
		outline: Hero.CloudUploadOutlineMd,
		solid: Hero.CloudUploadSolidSm,
	}),
	newIcon({
		name: "code",
		categories: [],
		outline: Hero.CodeOutlineMd,
		solid: Hero.CodeSolidSm,
	}),
	newIcon({
		name: "cog",
		categories: [categories.settings],
		outline: Hero.CogOutlineMd,
		solid: Hero.CogSolidSm,
	}),
	newIcon({
		name: "collection",
		categories: [],
		outline: Hero.CollectionOutlineMd,
		solid: Hero.CollectionSolidSm,
	}),
	newIcon({
		name: "color-swatch",
		categories: ["3d"],
		outline: Hero.ColorSwatchOutlineMd,
		solid: Hero.ColorSwatchSolidSm,
	}),
	newIcon({
		name: "credit-card",
		categories: [categories.currency, categories.shopping],
		outline: Hero.CreditCardOutlineMd,
		solid: Hero.CreditCardSolidSm,
	}),
	newIcon({
		name: "currency-dollar",
		categories: [categories.currency, categories.shopping],
		outline: Hero.CurrencyDollarOutlineMd,
		solid: Hero.CurrencyDollarSolidSm,
	}),
	newIcon({
		name: "currency-euro",
		categories: [categories.currency],
		outline: Hero.CurrencyEuroOutlineMd,
		solid: Hero.CurrencyEuroSolidSm,
	}),
	newIcon({
		name: "currency-pound",
		categories: [categories.currency],
		outline: Hero.CurrencyPoundOutlineMd,
		solid: Hero.CurrencyPoundSolidSm,
	}),
	newIcon({
		name: "currency-rupee",
		categories: [categories.currency],
		outline: Hero.CurrencyRupeeOutlineMd,
		solid: Hero.CurrencyRupeeSolidSm,
	}),
	newIcon({
		name: "currency-yen",
		categories: [categories.currency],
		outline: Hero.CurrencyYenOutlineMd,
		solid: Hero.CurrencyYenSolidSm,
	}),
	newIcon({
		name: "cursor-click",
		categories: [categories.pointer],
		outline: Hero.CursorClickOutlineMd,
		solid: Hero.CursorClickSolidSm,
	}),
	newIcon({
		name: "desktop-computer",
		categories: [categories.new],
		outline: Hero.DesktopComputerOutlineMd,
		solid: Hero.DesktopComputerSolidSm,
		status: "new",
	}),
	newIcon({
		name: "document",
		categories: [categories.file],
		outline: Hero.DocumentOutlineMd,
		solid: Hero.DocumentSolidSm,
	}),
	newIcon({
		name: "document-add",
		categories: [categories.add, categories.file],
		outline: Hero.DocumentAddOutlineMd,
		solid: Hero.DocumentAddSolidSm,
	}),
	newIcon({
		name: "document-download",
		categories: [categories.file],
		outline: Hero.DocumentDownloadOutlineMd,
		solid: Hero.DocumentDownloadSolidSm,
	}),
	newIcon({
		name: "document-duplicate",
		categories: [categories.copypasta, categories.file],
		outline: Hero.DocumentDuplicateOutlineMd,
		solid: Hero.DocumentDuplicateSolidSm,
	}),
	newIcon({
		name: "document-remove",
		categories: [categories.file],
		outline: Hero.DocumentRemoveOutlineMd,
		solid: Hero.DocumentRemoveSolidSm,
	}),
	newIcon({
		name: "document-report",
		categories: [categories.file, categories.stats],
		outline: Hero.DocumentReportOutlineMd,
		solid: Hero.DocumentReportSolidSm,
	}),
	newIcon({
		name: "dots-circle-horizontal",
		categories: [categories.ellisis, categories.more],
		outline: Hero.DotsCircleHorizontalOutlineMd,
		solid: Hero.DotsCircleHorizontalSolidSm,
	}),
	newIcon({
		name: "dots-horizontal",
		categories: [categories.ellisis, categories.more],
		outline: Hero.DotsHorizontalOutlineMd,
		solid: Hero.DotsHorizontalSolidSm,
	}),
	newIcon({
		name: "dots-vertical",
		categories: [categories.ellisis, categories.more],
		outline: Hero.DotsVerticalOutlineMd,
		solid: Hero.DotsVerticalSolidSm,
	}),
	newIcon({
		name: "download",
		categories: [],
		outline: Hero.DownloadOutlineMd,
		solid: Hero.DownloadSolidSm,
	}),
	newIcon({
		name: "duplicate",
		categories: [categories.copypasta],
		outline: Hero.DuplicateOutlineMd,
		solid: Hero.DuplicateSolidSm,
	}),
	newIcon({
		name: "emoji-happy",
		categories: [categories.emotions, categories.people, "face"],
		outline: Hero.EmojiHappyOutlineMd,
		solid: Hero.EmojiHappySolidSm,
	}),
	newIcon({
		name: "emoji-sad",
		categories: [categories.emotions, categories.people, "face"],
		outline: Hero.EmojiSadOutlineMd,
		solid: Hero.EmojiSadSolidSm,
	}),
	newIcon({
		name: "exclamation",
		categories: [categories.delete],
		outline: Hero.ExclamationOutlineMd,
		solid: Hero.ExclamationSolidSm,
	}),
	newIcon({
		name: "exclamation-circle",
		categories: [categories.delete],
		outline: Hero.ExclamationCircleOutlineMd,
		solid: Hero.ExclamationCircleSolidSm,
	}),
	newIcon({
		name: "external-link",
		categories: [categories.share],
		outline: Hero.ExternalLinkOutlineMd,
		solid: Hero.ExternalLinkSolidSm,
	}),
	newIcon({
		name: "eye",
		categories: [categories.password, "reveal"],
		outline: Hero.EyeOutlineMd,
		solid: Hero.EyeSolidSm,
	}),
	newIcon({
		name: "eye-off",
		categories: [categories.new, categories.password, "reveal"],
		outline: Hero.EyeOffOutlineMd,
		solid: Hero.EyeOffSolidSm,
		status: "new",
	}),
	newIcon({
		name: "filter",
		categories: [],
		outline: Hero.FilterOutlineMd,
		solid: Hero.FilterSolidSm,
	}),
	newIcon({
		name: "flag",
		categories: [],
		outline: Hero.FlagOutlineMd,
		solid: Hero.FlagSolidSm,
	}),
	newIcon({
		name: "folder",
		categories: [categories.folder],
		outline: Hero.FolderOutlineMd,
		solid: Hero.FolderSolidSm,
	}),
	newIcon({
		name: "globe",
		categories: [categories.world],
		outline: Hero.GlobeOutlineMd,
		solid: Hero.GlobeSolidSm,
	}),
	newIcon({
		name: "globe-alt",
		categories: [categories.world],
		outline: Hero.GlobeAltOutlineMd,
		solid: Hero.GlobeAltSolidSm,
	}),
	newIcon({
		name: "hashtag",
		categories: [],
		outline: Hero.HashtagOutlineMd,
		solid: Hero.HashtagSolidSm,
	}),
	newIcon({
		name: "heart",
		categories: ["like"],
		outline: Hero.HeartOutlineMd,
		solid: Hero.HeartSolidSm,
	}),
	newIcon({
		name: "home",
		categories: [],
		outline: Hero.HomeOutlineMd,
		solid: Hero.HomeSolidSm,
	}),
	newIcon({
		name: "inbox",
		categories: [categories.email],
		outline: Hero.InboxOutlineMd,
		solid: Hero.InboxSolidSm,
	}),
	newIcon({
		name: "inbox-in",
		categories: [categories.email],
		outline: Hero.InboxInOutlineMd,
		solid: Hero.InboxInSolidSm,
	}),
	newIcon({
		name: "information-circle",
		categories: ["help"],
		outline: Hero.InformationCircleOutlineMd,
		solid: Hero.InformationCircleSolidSm,
	}),
	newIcon({
		name: "key",
		categories: [],
		outline: Hero.KeyOutlineMd,
		solid: Hero.KeySolidSm,
	}),
	newIcon({
		name: "library",
		categories: [categories.new],
		outline: Hero.LibraryOutlineMd,
		solid: Hero.LibrarySolidSm,
		status: "new",
	}),
	newIcon({
		name: "light-bulb",
		categories: ["idea"],
		outline: Hero.LightBulbOutlineMd,
		solid: Hero.LightBulbSolidSm,
	}),
	newIcon({
		name: "lightning-bolt",
		categories: ["fast"],
		outline: Hero.LightningBoltOutlineMd,
		solid: Hero.LightningBoltSolidSm,
	}),
	newIcon({
		name: "link",
		categories: [categories.share],
		outline: Hero.LinkOutlineMd,
		solid: Hero.LinkSolidSm,
	}),
	newIcon({
		name: "location-marker",
		categories: ["company", "navigation"],
		outline: Hero.LocationMarkerOutlineMd,
		solid: Hero.LocationMarkerSolidSm,
	}),
	newIcon({
		name: "lock-closed",
		categories: [categories.password, "secure"],
		outline: Hero.LockClosedOutlineMd,
		solid: Hero.LockClosedSolidSm,
	}),
	newIcon({
		name: "lock-open",
		categories: [categories.password, "secure"],
		outline: Hero.LockOpenOutlineMd,
		solid: Hero.LockOpenSolidSm,
	}),
	newIcon({
		name: "logout",
		categories: ["sign out"],
		outline: Hero.LogoutOutlineMd,
		solid: Hero.LogoutSolidSm,
	}),
	newIcon({
		name: "mail",
		categories: [categories.email, "mail"],
		outline: Hero.MailOutlineMd,
		solid: Hero.MailSolidSm,
	}),
	newIcon({
		name: "mail-open",
		categories: [categories.email],
		outline: Hero.MailOpenOutlineMd,
		solid: Hero.MailOpenSolidSm,
	}),
	newIcon({
		name: "menu",
		categories: [categories.formatting],
		outline: Hero.MenuOutlineMd,
		solid: Hero.MenuSolidSm,
	}),
	newIcon({
		name: "menu-alt-1",
		categories: [categories.formatting],
		outline: Hero.MenuAlt1OutlineMd,
		solid: Hero.MenuAlt1SolidSm,
	}),
	newIcon({
		name: "menu-alt-2",
		categories: [categories.formatting],
		outline: Hero.MenuAlt2OutlineMd,
		solid: Hero.MenuAlt2SolidSm,
	}),
	newIcon({
		name: "menu-alt-3",
		categories: [categories.formatting],
		outline: Hero.MenuAlt3OutlineMd,
		solid: Hero.MenuAlt3SolidSm,
	}),
	newIcon({
		name: "menu-alt-4",
		categories: [categories.formatting],
		outline: Hero.MenuAlt4OutlineMd,
		solid: Hero.MenuAlt4SolidSm,
	}),
	newIcon({
		name: "microphone",
		categories: [],
		outline: Hero.MicrophoneOutlineMd,
		solid: Hero.MicrophoneSolidSm,
	}),
	newIcon({
		name: "minus-circle",
		categories: [categories.delete],
		outline: Hero.MinusCircleOutlineMd,
		solid: Hero.MinusCircleSolidSm,
	}),
	newIcon({
		name: "moon",
		categories: [categories.darkMode],
		outline: Hero.MoonOutlineMd,
		solid: Hero.MoonSolidSm,
	}),
	newIcon({
		name: "newspaper",
		categories: [categories.new],
		outline: Hero.NewspaperOutlineMd,
		solid: Hero.NewspaperSolidSm,
		status: "new",
	}),
	newIcon({
		name: "office-building",
		categories: ["company"],
		outline: Hero.OfficeBuildingOutlineMd,
		solid: Hero.OfficeBuildingSolidSm,
	}),
	newIcon({
		name: "paper-clip",
		categories: [categories.copypasta],
		outline: Hero.PaperClipOutlineMd,
		solid: Hero.PaperClipSolidSm,
	}),
	newIcon({
		name: "pause",
		categories: [categories.new],
		outline: Hero.PauseOutlineMd,
		solid: Hero.PauseSolidSm,
		status: "new",
	}),
	newIcon({
		name: "pencil",
		categories: [categories.add, categories.edit, "pen", "write"],
		outline: Hero.PencilOutlineMd,
		solid: Hero.PencilSolidSm,
	}),
	newIcon({
		name: "pencil-alt",
		categories: [categories.add, categories.edit, "pen", "write"],
		outline: Hero.PencilAltOutlineMd,
		solid: Hero.PencilAltSolidSm,
	}),
	newIcon({
		name: "phone",
		categories: [categories.phone],
		outline: Hero.PhoneOutlineMd,
		solid: Hero.PhoneSolidSm,
	}),
	newIcon({
		name: "phone-incoming",
		categories: [categories.phone],
		outline: Hero.PhoneIncomingOutlineMd,
		solid: Hero.PhoneIncomingSolidSm,
	}),
	newIcon({
		name: "phone-outgoing",
		categories: [categories.phone],
		outline: Hero.PhoneOutgoingOutlineMd,
		solid: Hero.PhoneOutgoingSolidSm,
	}),
	newIcon({
		name: "photograph",
		categories: [categories.photography],
		outline: Hero.PhotographOutlineMd,
		solid: Hero.PhotographSolidSm,
	}),
	newIcon({
		name: "play",
		categories: [categories.new],
		outline: Hero.PlayOutlineMd,
		solid: Hero.PlaySolidSm,
		status: "new",
	}),
	newIcon({
		name: "plus",
		categories: [categories.add],
		outline: Hero.PlusOutlineMd,
		solid: Hero.PlusSolidSm,
	}),
	newIcon({
		name: "plus-circle",
		categories: [categories.add],
		outline: Hero.PlusCircleOutlineMd,
		solid: Hero.PlusCircleSolidSm,
	}),
	newIcon({
		name: "printer",
		categories: [],
		outline: Hero.PrinterOutlineMd,
		solid: Hero.PrinterSolidSm,
	}),
	newIcon({
		name: "qrcode",
		categories: ["qr", "code", "barcode"],
		outline: Hero.QRCodeOutlineMd,
		solid: Hero.QRCodeSolidSm,
	}),
	newIcon({
		name: "question-mark-circle",
		categories: ["help"],
		outline: Hero.QuestionMarkCircleOutlineMd,
		solid: Hero.QuestionMarkCircleSolidSm,
	}),
	newIcon({
		name: "receipt-refund",
		categories: [],
		outline: Hero.ReceiptRefundOutlineMd,
		solid: Hero.ReceiptRefundSolidSm,
	}),
	newIcon({
		name: "refresh",
		categories: [categories.arrows],
		outline: Hero.RefreshOutlineMd,
		solid: Hero.RefreshSolidSm,
	}),
	newIcon({
		name: "reply",
		categories: [categories.arrows, categories.email],
		outline: Hero.ReplyOutlineMd,
		solid: Hero.ReplySolidSm,
	}),
	newIcon({
		name: "scale",
		categories: [],
		outline: Hero.ScaleOutlineMd,
		solid: Hero.ScaleSolidSm,
	}),
	newIcon({
		name: "search",
		categories: ["find"],
		outline: Hero.SearchOutlineMd,
		solid: Hero.SearchSolidSm,
	}),
	newIcon({
		name: "selector",
		categories: [],
		outline: Hero.SelectorOutlineMd,
		solid: Hero.SelectorSolidSm,
	}),
	newIcon({
		name: "share",
		categories: [categories.share],
		outline: Hero.ShareOutlineMd,
		solid: Hero.ShareSolidSm,
	}),
	newIcon({
		name: "shield-check",
		categories: [categories.verified, "authority", "badge", "secure", "security"],
		outline: Hero.ShieldCheckOutlineMd,
		solid: Hero.ShieldCheckSolidSm,
	}),
	newIcon({
		name: "shield-exclamation",
		categories: [categories.delete, "authority", "badge", "secure", "security"],
		outline: Hero.ShieldExclamationOutlineMd,
		solid: Hero.ShieldExclamationSolidSm,
	}),
	newIcon({
		name: "shopping-cart",
		categories: [categories.shopping],
		outline: Hero.ShoppingCartOutlineMd,
		solid: Hero.ShoppingCartSolidSm,
	}),
	newIcon({
		name: "sort-ascending",
		categories: ["list"],
		outline: Hero.SortAscendingOutlineMd,
		solid: Hero.SortAscendingSolidSm,
	}),
	newIcon({
		name: "sort-descending",
		categories: ["list"],
		outline: Hero.SortDescendingOutlineMd,
		solid: Hero.SortDescendingSolidSm,
	}),
	newIcon({
		name: "sparkles",
		categories: [categories.darkMode, "magic"],
		outline: Hero.SparklesOutlineMd,
		solid: Hero.SparklesSolidSm,
	}),
	newIcon({
		name: "speakerphone",
		categories: [categories.notifications],
		outline: Hero.SpeakerphoneOutlineMd,
		solid: Hero.SpeakerphoneSolidSm,
	}),
	newIcon({
		name: "star",
		categories: [categories.new],
		outline: Hero.StarOutlineMd,
		solid: Hero.StarSolidSm,
		status: "new",
	}),
	newIcon({
		name: "stop",
		categories: [categories.new],
		outline: Hero.StopOutlineMd,
		solid: Hero.StopSolidSm,
		status: "new",
	}),
	newIcon({
		name: "sun",
		categories: [categories.darkMode],
		outline: Hero.SunOutlineMd,
		solid: Hero.SunSolidSm,
	}),
	newIcon({
		name: "support",
		categories: [categories.new],
		outline: Hero.SupportOutlineMd,
		solid: Hero.SupportSolidSm,
		status: "new",
	}),
	newIcon({
		name: "switch-horizontal",
		categories: [],
		outline: Hero.SwitchHorizontalOutlineMd,
		solid: Hero.SwitchHorizontalSolidSm,
	}),
	newIcon({
		name: "switch-vertical",
		categories: ["switch-vertical", "swap"],
		outline: Hero.SwitchVerticalOutlineMd,
		solid: Hero.SwitchVerticalSolidSm,
	}),
	newIcon({
		name: "tag",
		categories: [categories.shopping],
		outline: Hero.TagOutlineMd,
		solid: Hero.TagSolidSm,
	}),
	newIcon({
		name: "template",
		categories: [categories.layout],
		outline: Hero.TemplateOutlineMd,
		solid: Hero.TemplateSolidSm,
	}),
	newIcon({
		name: "terminal",
		categories: [categories.new],
		outline: Hero.TerminalOutlineMd,
		solid: Hero.TerminalSolidSm,
		status: "new",
	}),
	newIcon({
		name: "ticket",
		categories: ["movie", "theater"],
		outline: Hero.TicketOutlineMd,
		solid: Hero.TicketSolidSm,
	}),
	newIcon({
		name: "translate",
		categories: [categories.world, "alphabet", "language"],
		outline: Hero.TranslateOutlineMd,
		solid: Hero.TranslateSolidSm,
	}),
	newIcon({
		name: "trash",
		categories: [categories.delete],
		outline: Hero.TrashOutlineMd,
		solid: Hero.TrashSolidSm,
	}),
	newIcon({
		name: "trending-down",
		categories: ["stock", "market", "stock market"],
		outline: Hero.TrendingDownOutlineMd,
		solid: Hero.TrendingDownSolidSm,
	}),
	newIcon({
		name: "trending-up",
		categories: ["stock", "market", "stock market"],
		outline: Hero.TrendingUpOutlineMd,
		solid: Hero.TrendingUpSolidSm,
	}),
	newIcon({
		name: "upload",
		categories: [],
		outline: Hero.UploadOutlineMd,
		solid: Hero.UploadSolidSm,
	}),
	newIcon({
		name: "user",
		categories: [categories.people],
		outline: Hero.UserOutlineMd,
		solid: Hero.UserSolidSm,
	}),
	newIcon({
		name: "user-add",
		categories: [categories.people, categories.add],
		outline: Hero.UserAddOutlineMd,
		solid: Hero.UserAddSolidSm,
	}),
	newIcon({
		name: "user-circle",
		categories: [categories.people],
		outline: Hero.UserCircleOutlineMd,
		solid: Hero.UserCircleSolidSm,
	}),
	newIcon({
		name: "user-group",
		categories: [categories.people, "group", "company"],
		outline: Hero.UserGroupOutlineMd,
		solid: Hero.UserGroupSolidSm,
	}),
	newIcon({
		name: "user-remove",
		categories: [categories.delete, categories.people],
		outline: Hero.UserRemoveOutlineMd,
		solid: Hero.UserRemoveSolidSm,
	}),
	newIcon({
		name: "users",
		categories: [categories.people, "group", "company"],
		outline: Hero.UsersOutlineMd,
		solid: Hero.UsersSolidSm,
	}),
	newIcon({
		name: "view-boards",
		categories: [categories.layout],
		outline: Hero.ViewBoardsOutlineMd,
		solid: Hero.ViewBoardsSolidSm,
	}),
	newIcon({
		name: "view-grid-add",
		categories: [categories.new],
		outline: Hero.ViewGridAddOutlineMd,
		solid: Hero.ViewGridAddSolidSm,
		status: "new",
	}),
	newIcon({
		name: "view-list",
		categories: [categories.layout],
		outline: Hero.ViewListOutlineMd,
		solid: Hero.ViewListSolidSm,
	}),
	newIcon({
		name: "volume-off",
		categories: ["sound", "speaker", "quiet", "loud"],
		outline: Hero.VolumeOffOutlineMd,
		solid: Hero.VolumeOffSolidSm,
	}),
	newIcon({
		name: "volume-up",
		categories: ["sound", "speaker", "quiet", "loud"],
		outline: Hero.VolumeUpOutlineMd,
		solid: Hero.VolumeUpSolidSm,
	}),
	newIcon({
		name: "x",
		categories: [categories.delete, "x"],
		outline: Hero.XOutlineMd,
		solid: Hero.XSolidSm,
	}),
	newIcon({
		name: "x-circle",
		categories: [categories.delete],
		outline: Hero.XCircleOutlineMd,
		solid: Hero.XCircleSolidSm,
	}),
	newIcon({
		name: "zoom-in",
		categories: ["magnify"],
		outline: Hero.ZoomInOutlineMd,
		solid: Hero.ZoomInSolidSm,
	}),
	newIcon({
		name: "zoom-out",
		categories: ["magnify"],
		outline: Hero.ZoomOutOutlineMd,
		solid: Hero.ZoomOutSolidSm,
	}),
]

export default originalIcons
