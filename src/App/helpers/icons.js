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

// Returns a new icon info object.
function newIcon({ name, outline, solid, categories }) {
	const info = {
		name,
		tags: registerTags(name, ...name.split("-"), ...categories),
		outline,
		solid,
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
	{
		name: "arrow-circle-up",
		tags: registerTags("arrow-circle-up", "arrow", "circle", "up"),
		outline: Hero.ArrowCircleUpOutlineMd,
		solid: Hero.ArrowCircleUpSolidSm,
	},
	{
		name: "arrow-down",
		tags: registerTags(...categories.arrows, "arrow-down", "arrow", "down"),
		outline: Hero.ArrowDownOutlineMd,
		solid: Hero.ArrowDownSolidSm,
	},
	{
		name: "arrow-left",
		tags: registerTags(...categories.arrows, "arrow-left", "arrow", "left"),
		outline: Hero.ArrowLeftOutlineMd,
		solid: Hero.ArrowLeftSolidSm,
	},
	{
		name: "arrow-narrow-down",
		tags: registerTags(...categories.arrows, "arrow-narrow-down", "arrow", "narrow", "down"),
		outline: Hero.ArrowNarrowDownOutlineMd,
		solid: Hero.ArrowNarrowDownSolidSm,
	},
	{
		name: "arrow-narrow-left",
		tags: registerTags(...categories.arrows, "arrow-narrow-left", "arrow", "narrow", "left"),
		outline: Hero.ArrowNarrowLeftOutlineMd,
		solid: Hero.ArrowNarrowLeftSolidSm,
	},
	{
		name: "arrow-narrow-right",
		tags: registerTags(...categories.arrows, "arrow-narrow-right", "arrow", "narrow", "right"),
		outline: Hero.ArrowNarrowRightOutlineMd,
		solid: Hero.ArrowNarrowRightSolidSm,
	},
	{
		name: "arrow-narrow-up",
		tags: registerTags(...categories.arrows, "arrow-narrow-up", "arrow", "narrow", "up"),
		outline: Hero.ArrowNarrowUpOutlineMd,
		solid: Hero.ArrowNarrowUpSolidSm,
	},
	{
		name: "arrow-right",
		tags: registerTags(...categories.arrows, "arrow-right", "arrow", "right"),
		outline: Hero.ArrowRightOutlineMd,
		solid: Hero.ArrowRightSolidSm,
	},
	{
		name: "arrow-up",
		tags: registerTags(...categories.arrows, "arrow-up", "arrow", "up"),
		outline: Hero.ArrowUpOutlineMd,
		solid: Hero.ArrowUpSolidSm,
	},
	{
		name: "at-symbol",
		tags: registerTags(...categories.email, "at-symbol", "at", "symbol"),
		outline: Hero.AtSymbolOutlineMd,
		solid: Hero.AtSymbolSolidSm,
	},
	{
		name: "badge-check",
		tags: registerTags(...categories.verified, "badge-check", "badge", "check"),
		outline: Hero.BadgeCheckOutlineMd,
		solid: Hero.BadgeCheckSolidSm,
	},
	{
		name: "ban",
		tags: registerTags(...categories.delete, "ban", "disabled"),
		outline: Hero.BanOutlineMd,
		solid: Hero.BanSolidSm,
	},
	{
		name: "bell",
		tags: registerTags(...categories.notifications, "bell"),
		outline: Hero.BellOutlineMd,
		solid: Hero.BellSolidSm,
	},
	{
		name: "book-open",
		tags: registerTags("book-open", "book", "open", "book", "chapter", "diary", "journal", "read"),
		outline: Hero.BookOpenOutlineMd,
		solid: Hero.BookOpenSolidSm,
	},
	{
		name: "bookmark",
		tags: registerTags("bookmark", "book", "chapter", "diary", "journal", "read"),
		outline: Hero.BookmarkOutlineMd,
		solid: Hero.BookmarkSolidSm,
	},
	{
		name: "bookmark-alt",
		tags: registerTags(...categories.new, "bookmark-alt", "bookmark", "alt", "book", "chapter", "diary", "journal", "read"),
		outline: Hero.BookmarkAltOutlineMd,
		solid: Hero.BookmarkAltSolidSm,
		status: "new",
	},
	{
		name: "briefcase",
		tags: registerTags("briefcase"),
		outline: Hero.BriefcaseOutlineMd,
		solid: Hero.BriefcaseSolidSm,
	},
	{
		name: "calendar",
		tags: registerTags("calendar", "events", ["days", "months", "years"]),
		outline: Hero.CalendarOutlineMd,
		solid: Hero.CalendarSolidSm,
	},
	{
		name: "camera",
		tags: registerTags(...categories.photography, "camera"),
		outline: Hero.CameraOutlineMd,
		solid: Hero.CameraSolidSm,
	},
	{
		name: "cash",
		tags: registerTags(...categories.currency, "cash"),
		outline: Hero.CashOutlineMd,
		solid: Hero.CashSolidSm,
	},
	{
		name: "chart-bar",
		tags: registerTags(...categories.new, ...categories.stats, "chart-bar", "chart", "bar"),
		outline: Hero.ChartBarOutlineMd,
		solid: Hero.ChartBarSolidSm,
		status: "new",
	},
	{
		name: "chart-pie",
		tags: registerTags(...categories.stats, "chart-pie", "chart", "pie"),
		outline: Hero.ChartPieOutlineMd,
		solid: Hero.ChartPieSolidSm,
	},
	{
		name: "chart-square-bar",
		tags: registerTags(...categories.new, ...categories.stats, "chart-square-bar", "chat", "square", "bar"),
		outline: Hero.ChartSquareBarOutlineMd,
		solid: Hero.ChartSquareBarSolidSm,
		status: "new",
	},
	{
		name: "chat",
		tags: registerTags(...categories.chatAsync, ...categories.chatSync, ...categories.ellisis, "chat"),
		outline: Hero.ChatOutlineMd,
		solid: Hero.ChatSolidSm,
	},
	{
		name: "chat-alt",
		tags: registerTags(...categories.chatAsync, ...categories.chatSync, ...categories.ellisis, "chat-alt", "chat", "alt"),
		outline: Hero.ChatAltOutlineMd,
		solid: Hero.ChatAltSolidSm,
	},
	{
		name: "chat-alt-2",
		tags: registerTags(...categories.new, ...categories.chatAsync, ...categories.chatSync, "chat-alt-2", "chat", "alt", "2"),
		outline: Hero.ChatAlt2OutlineMd,
		solid: Hero.ChatAlt2SolidSm,
		status: "new",
	},
	{
		name: "check",
		tags: registerTags(...categories.verified, "check"),
		outline: Hero.CheckOutlineMd,
		solid: Hero.CheckSolidSm,
	},
	{
		name: "check-circle",
		tags: registerTags(...categories.verified, "check-circle", "check", "circle"),
		outline: Hero.CheckCircleOutlineMd,
		solid: Hero.CheckCircleSolidSm,
	},
	{
		name: "cheveron-down",
		tags: registerTags("cheveron-down", "cheveron", "down"),
		outline: Hero.CheveronDownOutlineMd,
		solid: Hero.CheveronDownSolidSm,
	},
	{
		name: "cheveron-left",
		tags: registerTags("cheveron-left", "cheveron", "left"),
		outline: Hero.CheveronLeftOutlineMd,
		solid: Hero.CheveronLeftSolidSm,
	},
	{
		name: "cheveron-right",
		tags: registerTags("cheveron-right", "cheveron", "right"),
		outline: Hero.CheveronRightOutlineMd,
		solid: Hero.CheveronRightSolidSm,
	},
	{
		name: "cheveron-up",
		tags: registerTags("cheveron-up", "cheveron", "up"),
		outline: Hero.CheveronUpOutlineMd,
		solid: Hero.CheveronUpSolidSm,
	},
	{
		name: "clipboard",
		tags: registerTags(...categories.copypasta, "clipboard"),
		outline: Hero.ClipboardOutlineMd,
		solid: Hero.ClipboardSolidSm,
	},
	{
		name: "clipboard-check",
		tags: registerTags(...categories.copypasta, "clipboard-check", "clipboard", "check"),
		outline: Hero.ClipboardCheckOutlineMd,
		solid: Hero.ClipboardCheckSolidSm,
	},
	{
		name: "clipboard-copy",
		tags: registerTags(...categories.copypasta, "clipboard-copy", "clipboard", "copy"),
		outline: Hero.ClipboardCopyOutlineMd,
		solid: Hero.ClipboardCopySolidSm,
	},
	{
		name: "clipboard-list",
		tags: registerTags(...categories.copypasta, "clipboard-list", "clipboard", "list"),
		outline: Hero.ClipboardListOutlineMd,
		solid: Hero.ClipboardListSolidSm,
	},
	{
		name: "clock",
		tags: registerTags("clock", "time"),
		outline: Hero.ClockOutlineMd,
		solid: Hero.ClockSolidSm,
	},
	{
		name: "cloud-download",
		tags: registerTags("cloud-download", "cloud", "download"),
		outline: Hero.CloudDownloadOutlineMd,
		solid: Hero.CloudDownloadSolidSm,
	},
	{
		name: "cloud-upload",
		tags: registerTags("cloud-upload", "cloud", "upload"),
		outline: Hero.CloudUploadOutlineMd,
		solid: Hero.CloudUploadSolidSm,
	},
	{
		name: "code",
		tags: registerTags("code"),
		outline: Hero.CodeOutlineMd,
		solid: Hero.CodeSolidSm,
	},
	{
		name: "cog",
		tags: registerTags(...categories.settings, "cog"),
		outline: Hero.CogOutlineMd,
		solid: Hero.CogSolidSm,
	},
	{
		name: "collection",
		tags: registerTags("collection"),
		outline: Hero.CollectionOutlineMd,
		solid: Hero.CollectionSolidSm,
	},
	{
		name: "color-swatch",
		tags: registerTags("color-swatch", "color", "swatch", "3d"),
		outline: Hero.ColorSwatchOutlineMd,
		solid: Hero.ColorSwatchSolidSm,
	},
	{
		name: "credit-card",
		tags: registerTags(...categories.currency, ...categories.shopping, "credit-card", "credit", "card"),
		outline: Hero.CreditCardOutlineMd,
		solid: Hero.CreditCardSolidSm,
	},
	{
		name: "currency-dollar",
		tags: registerTags(...categories.currency, ...categories.shopping, "currency-dollar", "currency", "dollar"),
		outline: Hero.CurrencyDollarOutlineMd,
		solid: Hero.CurrencyDollarSolidSm,
	},
	{
		name: "currency-euro",
		tags: registerTags(...categories.currency, "currency-euro", "currency", "euro"),
		outline: Hero.CurrencyEuroOutlineMd,
		solid: Hero.CurrencyEuroSolidSm,
	},
	{
		name: "currency-pound",
		tags: registerTags(...categories.currency, "currency-pound", "currency", "pound"),
		outline: Hero.CurrencyPoundOutlineMd,
		solid: Hero.CurrencyPoundSolidSm,
	},
	{
		name: "currency-rupee",
		tags: registerTags(...categories.currency, "currency-rupee", "currency", "rupee"),
		outline: Hero.CurrencyRupeeOutlineMd,
		solid: Hero.CurrencyRupeeSolidSm,
	},
	{
		name: "currency-yen",
		tags: registerTags(...categories.currency, "currency-yen", "currency", "yen"),
		outline: Hero.CurrencyYenOutlineMd,
		solid: Hero.CurrencyYenSolidSm,
	},
	{
		name: "cursor-click",
		tags: registerTags(...categories.pointer, "cursor-click", "cursor", "click"),
		outline: Hero.CursorClickOutlineMd,
		solid: Hero.CursorClickSolidSm,
	},
	{
		name: "desktop-computer",
		tags: registerTags(...categories.new),
		outline: Hero.DesktopComputerOutlineMd,
		solid: Hero.DesktopComputerSolidSm,
		status: "new",
	},
	{
		name: "document",
		tags: registerTags(...categories.file, "document"),
		outline: Hero.DocumentOutlineMd,
		solid: Hero.DocumentSolidSm,
	},
	{
		name: "document-add",
		tags: registerTags(...categories.add, ...categories.file, "document-add", "document", "add"),
		outline: Hero.DocumentAddOutlineMd,
		solid: Hero.DocumentAddSolidSm,
	},
	{
		name: "document-download",
		tags: registerTags(...categories.file, "document-download", "document", "download"),
		outline: Hero.DocumentDownloadOutlineMd,
		solid: Hero.DocumentDownloadSolidSm,
	},
	{
		name: "document-duplicate",
		tags: registerTags(...categories.copypasta, ...categories.file, "document-duplicate", "document", "duplicate"),
		outline: Hero.DocumentDuplicateOutlineMd,
		solid: Hero.DocumentDuplicateSolidSm,
	},
	{
		name: "document-remove",
		tags: registerTags(...categories.file, "document-remove", "document", "remove"),
		outline: Hero.DocumentRemoveOutlineMd,
		solid: Hero.DocumentRemoveSolidSm,
	},
	{
		name: "document-report",
		tags: registerTags(...categories.file, ...categories.stats, "document-report", "document", "report"),
		outline: Hero.DocumentReportOutlineMd,
		solid: Hero.DocumentReportSolidSm,
	},
	{
		name: "dots-circle-horizontal",
		tags: registerTags(...categories.ellisis, ...categories.more, "dots-circle-horizontal", "dots", "circle", "horizontal"),
		outline: Hero.DotsCircleHorizontalOutlineMd,
		solid: Hero.DotsCircleHorizontalSolidSm,
	},
	{
		name: "dots-horizontal",
		tags: registerTags(...categories.ellisis, ...categories.more, "dots-horizontal", "dots", "horizontal"),
		outline: Hero.DotsHorizontalOutlineMd,
		solid: Hero.DotsHorizontalSolidSm,
	},
	{
		name: "dots-vertical",
		tags: registerTags(...categories.ellisis, ...categories.more, "dots-vertical", "dots", "vertical"),
		outline: Hero.DotsVerticalOutlineMd,
		solid: Hero.DotsVerticalSolidSm,
	},
	{
		name: "download",
		tags: registerTags("download"),
		outline: Hero.DownloadOutlineMd,
		solid: Hero.DownloadSolidSm,
	},
	{
		name: "duplicate",
		tags: registerTags(...categories.copypasta, "duplicate"),
		outline: Hero.DuplicateOutlineMd,
		solid: Hero.DuplicateSolidSm,
	},
	{
		name: "emoji-happy",
		tags: registerTags(...categories.emotions, ...categories.people, "emoji-happy", "emoji", "happy"),
		outline: Hero.EmojiHappyOutlineMd,
		solid: Hero.EmojiHappySolidSm,
	},
	{
		name: "emoji-sad",
		tags: registerTags(...categories.emotions, ...categories.people, "emoji-sad", "emoji", "sad"),
		outline: Hero.EmojiSadOutlineMd,
		solid: Hero.EmojiSadSolidSm,
	},
	{
		name: "exclamation",
		tags: registerTags(...categories.delete, "exclamation"),
		outline: Hero.ExclamationOutlineMd,
		solid: Hero.ExclamationSolidSm,
	},
	{
		name: "exclamation-circle",
		tags: registerTags(...categories.delete, "exclamation-circle", "exclamation", "circle"),
		outline: Hero.ExclamationCircleOutlineMd,
		solid: Hero.ExclamationCircleSolidSm,
	},
	{
		name: "external-link",
		tags: registerTags(...categories.share, "external-link", "external", "link"),
		outline: Hero.ExternalLinkOutlineMd,
		solid: Hero.ExternalLinkSolidSm,
	},
	{
		name: "eye",
		tags: registerTags(...categories.password, "eye", "reveal"),
		outline: Hero.EyeOutlineMd,
		solid: Hero.EyeSolidSm,
	},
	{
		name: "eye-off",
		tags: registerTags(...categories.new),
		outline: Hero.EyeOffOutlineMd,
		solid: Hero.EyeOffSolidSm,
		status: "new",
	},
	{
		name: "filter",
		tags: registerTags("filter"),
		outline: Hero.FilterOutlineMd,
		solid: Hero.FilterSolidSm,
	},
	{
		name: "flag",
		tags: registerTags("flag"),
		outline: Hero.FlagOutlineMd,
		solid: Hero.FlagSolidSm,
	},
	{
		name: "folder",
		tags: registerTags(...categories.folder, "folder"),
		outline: Hero.FolderOutlineMd,
		solid: Hero.FolderSolidSm,
	},
	{
		name: "globe",
		tags: registerTags(...categories.world, "globe"),
		outline: Hero.GlobeOutlineMd,
		solid: Hero.GlobeSolidSm,
	},
	{
		name: "globe-alt",
		tags: registerTags(...categories.world, "globe-alt", "globe", "alt"),
		outline: Hero.GlobeAltOutlineMd,
		solid: Hero.GlobeAltSolidSm,
	},
	{
		name: "hashtag",
		tags: registerTags("hashtag"),
		outline: Hero.HashtagOutlineMd,
		solid: Hero.HashtagSolidSm,
	},
	{
		name: "heart",
		tags: registerTags("heart", "like"),
		outline: Hero.HeartOutlineMd,
		solid: Hero.HeartSolidSm,
	},
	{
		name: "home",
		tags: registerTags("home"),
		outline: Hero.HomeOutlineMd,
		solid: Hero.HomeSolidSm,
	},
	{
		name: "inbox",
		tags: registerTags(...categories.email, "inbox"),
		outline: Hero.InboxOutlineMd,
		solid: Hero.InboxSolidSm,
	},
	{
		name: "inbox-in",
		tags: registerTags(...categories.email, "inbox-in", "inbox", "in"),
		outline: Hero.InboxInOutlineMd,
		solid: Hero.InboxInSolidSm,
	},
	{
		name: "information-circle",
		tags: registerTags("information-circle", "information", "circle", "help"),
		outline: Hero.InformationCircleOutlineMd,
		solid: Hero.InformationCircleSolidSm,
	},
	{
		name: "key",
		tags: registerTags("key"),
		outline: Hero.KeyOutlineMd,
		solid: Hero.KeySolidSm,
	},
	{
		name: "library",
		tags: registerTags(...categories.new),
		outline: Hero.LibraryOutlineMd,
		solid: Hero.LibrarySolidSm,
		status: "new",
	},
	{
		name: "light-bulb",
		tags: registerTags("light-bulb", "light", "bulb", "idea"),
		outline: Hero.LightBulbOutlineMd,
		solid: Hero.LightBulbSolidSm,
	},
	{
		name: "lightning-bolt",
		tags: registerTags("lightning-bolt", "lightning", "bolt", "fast"),
		outline: Hero.LightningBoltOutlineMd,
		solid: Hero.LightningBoltSolidSm,
	},
	{
		name: "link",
		tags: registerTags(...categories.share, "link"),
		outline: Hero.LinkOutlineMd,
		solid: Hero.LinkSolidSm,
	},
	{
		name: "location-marker",
		tags: registerTags("location-marker", "location", "marker", "company", "navigation"),
		outline: Hero.LocationMarkerOutlineMd,
		solid: Hero.LocationMarkerSolidSm,
	},
	{
		name: "lock-closed",
		tags: registerTags(...categories.password, "lock-closed", "lock", "closed", "secure"),
		outline: Hero.LockClosedOutlineMd,
		solid: Hero.LockClosedSolidSm,
	},
	{
		name: "lock-open",
		tags: registerTags(...categories.password, "lock-open", "lock", "open", "secure"),
		outline: Hero.LockOpenOutlineMd,
		solid: Hero.LockOpenSolidSm,
	},
	{
		name: "logout",
		tags: registerTags("logout", "sign out"),
		outline: Hero.LogoutOutlineMd,
		solid: Hero.LogoutSolidSm,
	},
	{
		name: "mail",
		tags: registerTags(...categories.email, "mail"),
		outline: Hero.MailOutlineMd,
		solid: Hero.MailSolidSm,
	},
	{
		name: "mail-open",
		tags: registerTags(...categories.email, "mail-open", "mail", "open"),
		outline: Hero.MailOpenOutlineMd,
		solid: Hero.MailOpenSolidSm,
	},
	{
		name: "menu",
		tags: registerTags(...categories.formatting, "menu"),
		outline: Hero.MenuOutlineMd,
		solid: Hero.MenuSolidSm,
	},
	{
		name: "menu-alt-1",
		tags: registerTags(...categories.formatting, "menu-alt-1", "menu", "alt", "1"),
		outline: Hero.MenuAlt1OutlineMd,
		solid: Hero.MenuAlt1SolidSm,
	},
	{
		name: "menu-alt-2",
		tags: registerTags(...categories.formatting, "menu-alt-2", "menu", "alt", "2"),
		outline: Hero.MenuAlt2OutlineMd,
		solid: Hero.MenuAlt2SolidSm,
	},
	{
		name: "menu-alt-3",
		tags: registerTags(...categories.formatting, "menu-alt-3", "menu", "alt", "3"),
		outline: Hero.MenuAlt3OutlineMd,
		solid: Hero.MenuAlt3SolidSm,
	},
	{
		name: "menu-alt-4",
		tags: registerTags(...categories.formatting, "menu-alt-4", "menu", "alt", "4"),
		outline: Hero.MenuAlt4OutlineMd,
		solid: Hero.MenuAlt4SolidSm,
	},
	{
		name: "microphone",
		tags: registerTags("microphone"),
		outline: Hero.MicrophoneOutlineMd,
		solid: Hero.MicrophoneSolidSm,
	},
	{
		name: "minus-circle",
		tags: registerTags(...categories.delete, "minus-circle", "minus", "circle"),
		outline: Hero.MinusCircleOutlineMd,
		solid: Hero.MinusCircleSolidSm,
	},
	{
		name: "moon",
		tags: registerTags(...categories.darkMode, "moon"),
		outline: Hero.MoonOutlineMd,
		solid: Hero.MoonSolidSm,
	},
	{
		name: "newspaper",
		tags: registerTags(...categories.new),
		outline: Hero.NewspaperOutlineMd,
		solid: Hero.NewspaperSolidSm,
		status: "new",
	},
	{
		name: "office-building",
		tags: registerTags("office-building", "office", "building", "company"),
		outline: Hero.OfficeBuildingOutlineMd,
		solid: Hero.OfficeBuildingSolidSm,
	},
	{
		name: "paper-clip",
		tags: registerTags(...categories.copypasta, "paper-clip", "paper", "clip"),
		outline: Hero.PaperClipOutlineMd,
		solid: Hero.PaperClipSolidSm,
	},
	{
		name: "pause",
		tags: registerTags(...categories.new),
		outline: Hero.PauseOutlineMd,
		solid: Hero.PauseSolidSm,
		status: "new",
	},
	{
		name: "pencil",
		tags: registerTags(...categories.add, ...categories.edit, "pencil", "pen", "write"),
		outline: Hero.PencilOutlineMd,
		solid: Hero.PencilSolidSm,
	},
	{
		name: "pencil-alt",
		tags: registerTags(...categories.add, ...categories.edit, "pencil-alt", "pencil", "alt", "pen", "write"),
		outline: Hero.PencilAltOutlineMd,
		solid: Hero.PencilAltSolidSm,
	},
	{
		name: "phone",
		tags: registerTags(...categories.phone, "phone"),
		outline: Hero.PhoneOutlineMd,
		solid: Hero.PhoneSolidSm,
	},
	{
		name: "phone-incoming",
		tags: registerTags(...categories.phone, "phone-incoming", "phone", "incoming"),
		outline: Hero.PhoneIncomingOutlineMd,
		solid: Hero.PhoneIncomingSolidSm,
	},
	{
		name: "phone-outgoing",
		tags: registerTags(...categories.phone, "phone-outgoing", "phone", "outgoing"),
		outline: Hero.PhoneOutgoingOutlineMd,
		solid: Hero.PhoneOutgoingSolidSm,
	},
	{
		name: "photograph",
		tags: registerTags(...categories.photography, "photograph"),
		outline: Hero.PhotographOutlineMd,
		solid: Hero.PhotographSolidSm,
	},
	{
		name: "play",
		tags: registerTags(...categories.new),
		outline: Hero.PlayOutlineMd,
		solid: Hero.PlaySolidSm,
		status: "new",
	},
	{
		name: "plus",
		tags: registerTags(...categories.add, "plus"),
		outline: Hero.PlusOutlineMd,
		solid: Hero.PlusSolidSm,
	},
	{
		name: "plus-circle",
		tags: registerTags(...categories.add, "plus-circle", "plus", "circle"),
		outline: Hero.PlusCircleOutlineMd,
		solid: Hero.PlusCircleSolidSm,
	},
	{
		name: "printer",
		tags: registerTags("printer"),
		outline: Hero.PrinterOutlineMd,
		solid: Hero.PrinterSolidSm,
	},
	{
		name: "qrcode",
		tags: registerTags("qrcode", "code"),
		outline: Hero.QRCodeOutlineMd,
		solid: Hero.QRCodeSolidSm,
	},
	{
		name: "question-mark-circle",
		tags: registerTags("question-mark-circle", "question", "mark", "circle", "help"),
		outline: Hero.QuestionMarkCircleOutlineMd,
		solid: Hero.QuestionMarkCircleSolidSm,
	},
	{
		name: "receipt-refund",
		tags: registerTags("receipt-refund", "receipt", "refund"),
		outline: Hero.ReceiptRefundOutlineMd,
		solid: Hero.ReceiptRefundSolidSm,
	},
	{
		name: "refresh",
		tags: registerTags(...categories.arrows, "refresh"),
		outline: Hero.RefreshOutlineMd,
		solid: Hero.RefreshSolidSm,
	},
	{
		name: "reply",
		tags: registerTags(...categories.arrows, ...categories.email, "reply"),
		outline: Hero.ReplyOutlineMd,
		solid: Hero.ReplySolidSm,
	},
	{
		name: "scale",
		tags: registerTags("scale"),
		outline: Hero.ScaleOutlineMd,
		solid: Hero.ScaleSolidSm,
	},
	{
		name: "search",
		tags: registerTags("search", "find"),
		outline: Hero.SearchOutlineMd,
		solid: Hero.SearchSolidSm,
	},
	{
		name: "selector",
		tags: registerTags("selector"),
		outline: Hero.SelectorOutlineMd,
		solid: Hero.SelectorSolidSm,
	},
	{
		name: "share",
		tags: registerTags(...categories.share, "share"),
		outline: Hero.ShareOutlineMd,
		solid: Hero.ShareSolidSm,
	},
	{
		name: "shield-check",
		tags: registerTags(...categories.verified, "shield-check", "shield", "check", "authority", "badge", "secure", "security"),
		outline: Hero.ShieldCheckOutlineMd,
		solid: Hero.ShieldCheckSolidSm,
	},
	{
		name: "shield-exclamation",
		tags: registerTags(...categories.delete, "shield-exclamation", "shield", "exclamation", "authority", "badge", "secure", "security"),
		outline: Hero.ShieldExclamationOutlineMd,
		solid: Hero.ShieldExclamationSolidSm,
	},
	{
		name: "shopping-cart",
		tags: registerTags(...categories.shopping, "shopping-cart", "shopping", "cart"),
		outline: Hero.ShoppingCartOutlineMd,
		solid: Hero.ShoppingCartSolidSm,
	},
	{
		name: "sort-ascending",
		tags: registerTags("sort-ascending", "sort", "ascending"),
		outline: Hero.SortAscendingOutlineMd,
		solid: Hero.SortAscendingSolidSm,
	},
	{
		name: "sort-descending",
		tags: registerTags("sort-descending", "sort", "descending"),
		outline: Hero.SortDescendingOutlineMd,
		solid: Hero.SortDescendingSolidSm,
	},
	{
		name: "sparkles",
		tags: registerTags(...categories.darkMode, "sparkles", "magic"),
		outline: Hero.SparklesOutlineMd,
		solid: Hero.SparklesSolidSm,
	},
	{
		name: "speakerphone",
		tags: registerTags(...categories.notifications, "speakerphone"),
		outline: Hero.SpeakerphoneOutlineMd,
		solid: Hero.SpeakerphoneSolidSm,
	},
	{
		name: "star",
		tags: registerTags(...categories.new),
		outline: Hero.StarOutlineMd,
		solid: Hero.StarSolidSm,
		status: "new",
	},
	{
		name: "stop",
		tags: registerTags(...categories.new),
		outline: Hero.StopOutlineMd,
		solid: Hero.StopSolidSm,
		status: "new",
	},
	{
		name: "sun",
		tags: registerTags(...categories.darkMode, "sun"),
		outline: Hero.SunOutlineMd,
		solid: Hero.SunSolidSm,
	},
	{
		name: "support",
		tags: registerTags(...categories.new),
		outline: Hero.SupportOutlineMd,
		solid: Hero.SupportSolidSm,
		status: "new",
	},
	{
		name: "switch-horizontal",
		tags: registerTags("switch-horizontal", "switch", "horizontal", "swap"),
		outline: Hero.SwitchHorizontalOutlineMd,
		solid: Hero.SwitchHorizontalSolidSm,
	},
	{
		name: "switch-vertical",
		tags: registerTags("switch-vertical", "switch", "vertical", "swap"),
		outline: Hero.SwitchVerticalOutlineMd,
		solid: Hero.SwitchVerticalSolidSm,
	},
	{
		name: "tag",
		tags: registerTags(...categories.shopping, "tag"),
		outline: Hero.TagOutlineMd,
		solid: Hero.TagSolidSm,
	},
	{
		name: "template",
		tags: registerTags(...categories.layout, "template"),
		outline: Hero.TemplateOutlineMd,
		solid: Hero.TemplateSolidSm,
	},
	{
		name: "terminal",
		tags: registerTags(...categories.new),
		outline: Hero.TerminalOutlineMd,
		solid: Hero.TerminalSolidSm,
		status: "new",
	},
	{
		name: "ticket",
		tags: registerTags("ticket", "movie", "theater"),
		outline: Hero.TicketOutlineMd,
		solid: Hero.TicketSolidSm,
	},
	{
		name: "translate",
		tags: registerTags(...categories.world, "translate", "alphabet", "language"),
		outline: Hero.TranslateOutlineMd,
		solid: Hero.TranslateSolidSm,
	},
	{
		name: "trash",
		tags: registerTags(...categories.delete, "trash"),
		outline: Hero.TrashOutlineMd,
		solid: Hero.TrashSolidSm,
	},
	{
		name: "trending-down",
		tags: registerTags("trending-down", "trending", "down", "stock", "market", "stock market"),
		outline: Hero.TrendingDownOutlineMd,
		solid: Hero.TrendingDownSolidSm,
	},
	{
		name: "trending-up",
		tags: registerTags("trending-up", "trending", "up", "stock", "market", "stock market"),
		outline: Hero.TrendingUpOutlineMd,
		solid: Hero.TrendingUpSolidSm,
	},
	{
		name: "upload",
		tags: registerTags("upload"),
		outline: Hero.UploadOutlineMd,
		solid: Hero.UploadSolidSm,
	},
	{
		name: "user",
		tags: registerTags(...categories.people, "user"),
		outline: Hero.UserOutlineMd,
		solid: Hero.UserSolidSm,
	},
	{
		name: "user-add",
		tags: registerTags(...categories.people, ...categories.add, "user-add", "user", "add"),
		outline: Hero.UserAddOutlineMd,
		solid: Hero.UserAddSolidSm,
	},
	{
		name: "user-circle",
		tags: registerTags(...categories.people, "user-circle", "user", "circle"),
		outline: Hero.UserCircleOutlineMd,
		solid: Hero.UserCircleSolidSm,
	},
	{
		name: "user-group",
		tags: registerTags(...categories.people, "user-group", "user", "group", "company"),
		outline: Hero.UserGroupOutlineMd,
		solid: Hero.UserGroupSolidSm,
	},
	{
		name: "user-remove",
		tags: registerTags(...categories.delete, ...categories.people, "user-remove", "user", "remove"),
		outline: Hero.UserRemoveOutlineMd,
		solid: Hero.UserRemoveSolidSm,
	},
	{
		name: "users",
		tags: registerTags(...categories.people, "users", "company"),
		outline: Hero.UsersOutlineMd,
		solid: Hero.UsersSolidSm,
	},
	{
		name: "view-boards",
		tags: registerTags(...categories.layout, "view-boards", "view", "boards"),
		outline: Hero.ViewBoardsOutlineMd,
		solid: Hero.ViewBoardsSolidSm,
	},
	{
		name: "view-grid-add",
		tags: registerTags(...categories.new),
		outline: Hero.ViewGridAddOutlineMd,
		solid: Hero.ViewGridAddSolidSm,
		status: "new",
	},
	{
		name: "view-list",
		tags: registerTags(...categories.layout, "view-list", "view", "list"),
		outline: Hero.ViewListOutlineMd,
		solid: Hero.ViewListSolidSm,
	},
	{
		name: "volume-off",
		tags: registerTags("volume-off", "volume", "off", "sound", "speaker", ["quiet", "loud"]),
		outline: Hero.VolumeOffOutlineMd,
		solid: Hero.VolumeOffSolidSm,
	},
	{
		name: "volume-up",
		tags: registerTags("volume-up", "volume", "up", "sound", "speaker", ["quiet", "loud"]),
		outline: Hero.VolumeUpOutlineMd,
		solid: Hero.VolumeUpSolidSm,
	},
	{
		name: "x",
		tags: registerTags(...categories.delete, "x"),
		outline: Hero.XOutlineMd,
		solid: Hero.XSolidSm,
	},
	{
		name: "x-circle",
		tags: registerTags(...categories.delete, "x-circle", "x", "circle"),
		outline: Hero.XCircleOutlineMd,
		solid: Hero.XCircleSolidSm,
	},
	{
		name: "zoom-in",
		tags: registerTags("zoom-in", "zoom", "in", "magnify"),
		outline: Hero.ZoomInOutlineMd,
		solid: Hero.ZoomInSolidSm,
	},
	{
		name: "zoom-out",
		tags: registerTags("zoom-out", "zoom", "out", "magnify"),
		outline: Hero.ZoomOutOutlineMd,
		solid: Hero.ZoomOutSolidSm,
	},
]

export default originalIcons
