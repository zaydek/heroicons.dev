import * as Hero from "react-heroicons"

// "adjustments configure controls settings sliders",
// "annotation box chat comment message square suggestion",
// "archive bin",
// "arrow circle direction down"
// "arrow circle direction left"
// "arrow circle direction right"
// "arrow circle direction up"
// "arrow circle direction down"
// "arrow direction left"
// "arrow direction down narrow"
// "arrow direction left narrow"
// "arrow direction narrow right"
// "arrow direction narrow up"
// "arrow direction right"
// "arrow direction up"
// "address at email symbol"
// "alert bell notification",
// "book bookmark open page read",
// "book bookmark",
// "bag briefcase business travel",
// "calendar date time travel",
// "camera photo photography travel",
// "bill cash dollar money",
// "business chart data math science",
// "annotation bubble chat circle comment message suggestion",
// "check circle complete done task todo",
// "check complete done task todo",
// "arrow cheveron chevron direction down",
// "arrow cheveron chevron direction left",
// "arrow cheveron chevron direction right",
// "arrow cheveron chevron direction up",
// "check clipboard copy done paste task todo",
// "check clipboard copy done paste task todo",
// "check clipboard copy done paste task todo",
// "check clipboard copy done paste task todo",

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

// Accepts an array of strings or arrays and recursively
// flattens and dedupes them.
//
// TODO: Dedupe?
function createTags(...tags) {
	return [...new Set(flatten(tags))]
}

const categories = {

	continuity: [
		"continuity",

		["back", "next"], // Lsorted
		["backwards", "forwards"], // Lsorted
		["discontinue", "continue"], // Lsorted
	],

	arrows: [
		"arrows",
	],

	direction: [
		"direction",

		"arrows",
		["left", "right", "up", "down"], // Lsorted
	],

	navigation: [
		"navigation",

		["west", "east", "north", "south"], // Lsorted
	],

	emotions: [
		"emotions",

		["sad", "happy"], // Lsorted
		["negative", "positive"], // Lsorted
	],

	formatting: [
		["format", "formatting"],

		"wysiwyg",
		["column", "row"], // Lsorted
		["horizontal", "vertical"], // Lsorted
		// DEPRECATE
		["italic", "bold"], // Lsorted
		["justify", "align"], // Lsorted
	],

	darkMode: [
		["dark mode", "dark-mode"],

		["moon", "sun"],
		["night", "day"],
	],

	photography: [
		"photography",

		["camera", "photo"],
	],

	chatSync: [
		["chat-sync", "chat", "synchronous"],

		"comment",
		"discuss",
		"message",
		"think",
		"type",
		"write",
		["annotate", "annotation"],
	],

	chatAsync: [
		["chat-async", "chatting", "asynchronous"],

		"commenting",
		"discussing",
		"messaging",
		"thinking",
		"typing",
		"writing",
		"annotating",
	],

	//	file: [
	//		"file",
	//
	//		"document",
	//		"item",
	//	]

	email: [
		"email",

		"mail",
		["at", "symbol", "at symbol"],
		["email", "address", "email address"],
	],

	copypasta: [
		"copypasta",

		"clipboard",
		"duplciate",
		["cut", "copy", "paste"],
	],

	folder: [
		"folder",

		"archive",
		"bin",
		"storage",
	],

	settings: [
		"settings",

		"controls",
		"preferences",
	],

	ellisis: [
		"dots",
		"ellisis",
	],

	more: [
		"more",

		"actions",
		"options",
	]

}

// registerIcon({
// 	name: "...",
// 	tags: "...",
// })

// "file",

// "more",
// "etc",

// "commerce",
// "bill",
// "cent"
// "coin",
// "credit",
// "currency",
// "debit",
// "dollar",
// "exchange rate",
// "money",

// "pointer"

const originalIcons = [
	{
		name:    "adjustments",
		tags:    createTags(
			...categories.settings,
			"adjustments",

			"sliders",
		),
		solid:   Hero.AdjustmentsSolidSm,
		outline: Hero.AdjustmentsOutlineMd,
	},
	{
		name:    "annotation",
		tags:    createTags(
			...categories.chatSync,
			"annotation",
		),
		solid:   Hero.AnnotationSolidSm,
		outline: Hero.AnnotationOutlineMd,
	},
	{
		name:    "archive",
		tags:    createTags(
			...categories.folder,
			"archive",
		),
		solid:   Hero.ArchiveSolidSm,
		outline: Hero.ArchiveOutlineMd,
	},
	{
		name:    "arrow-circle-down",
		tags:    createTags(
			...categories.direction,
			"arrow-circle-down",
			"arrow",
			"circle",
			"down",
		),
		solid:   Hero.ArrowCircleDownSolidSm,
		outline: Hero.ArrowCircleDownOutlineMd,
	},
	{
		name:    "arrow-circle-left",
		tags:    createTags(
			...categories.direction,
			"arrow-circle-left",
			"arrow",
			"circle",
			"left",
		),
		solid:   Hero.ArrowCircleLeftSolidSm,
		outline: Hero.ArrowCircleLeftOutlineMd,
	},
	{
		name:    "arrow-circle-right",
		tags:    createTags(
			...categories.direction,
			"arrow-circle-right",
			"arrow",
			"circle",
			"right",
		),
		solid:   Hero.ArrowCircleRightSolidSm,
		outline: Hero.ArrowCircleRightOutlineMd,
	},
	{
		name:    "arrow-circle-up",
		tags:    createTags(
			...categories.direction,
			"arrow-circle-up",
			"arrow",
			"circle",
			"up",
		),
		solid:   Hero.ArrowCircleUpSolidSm,
		outline: Hero.ArrowCircleUpOutlineMd,
	},
	{
		name:    "arrow-down",
		tags:    createTags(
			...categories.direction,
			"arrow-down",
			"arrow",
			"down",
		),
		solid:   Hero.ArrowDownSolidSm,
		outline: Hero.ArrowDownOutlineMd,
	},
	{
		name:    "arrow-left",
		tags:    createTags(
			...categories.direction,
			"arrow-left",
			"arrow",
			"left",
		),
		solid:   Hero.ArrowLeftSolidSm,
		outline: Hero.ArrowLeftOutlineMd,
	},
	{
		name:    "arrow-narrow-down",
		tags:    createTags(
			...categories.direction,
			"arrow-narrow-down",
			"arrow",
			"narrow",
			"down",
		),
		solid:   Hero.ArrowNarrowDownSolidSm,
		outline: Hero.ArrowNarrowDownOutlineMd,
	},
	{
		name:    "arrow-narrow-left",
		tags:    createTags(
			...categories.direction,
			"arrow-narrow-left",
			"arrow",
			"narrow",
			"left",
		),
		solid:   Hero.ArrowNarrowLeftSolidSm,
		outline: Hero.ArrowNarrowLeftOutlineMd,
	},
	{
		name:    "arrow-narrow-right",
		tags:    createTags(
			...categories.direction,
			"arrow-narrow-right",
			"arrow",
			"narrow",
			"right",
		),
		solid:   Hero.ArrowNarrowRightSolidSm,
		outline: Hero.ArrowNarrowRightOutlineMd,
	},
	{
		name:    "arrow-narrow-up",
		tags:    createTags(
			...categories.direction,
			"arrow-narrow-up",
			"arrow",
			"narrow",
			"up",
		),
		solid:   Hero.ArrowNarrowUpSolidSm,
		outline: Hero.ArrowNarrowUpOutlineMd,
	},
	{
		name:    "arrow-right",
		tags:    createTags(
			...categories.direction,
			"arrow-right",
			"arrow",
			"right",
		),
		solid:   Hero.ArrowRightSolidSm,
		outline: Hero.ArrowRightOutlineMd,
	},
	{
		name:    "arrow-up",
		tags:    createTags(
			...categories.direction,
			"arrow-up",
			"arrow",
			"up",
		),
		solid:   Hero.ArrowUpSolidSm,
		outline: Hero.ArrowUpOutlineMd,
	},
	{
		name:    "at-symbol",
		tags:    createTags(
			...categories.email,
			"at-symbol",
			"at",
			"symbol",
		),
		solid:   Hero.AtSymbolSolidSm,
		outline: Hero.AtSymbolOutlineMd,
	},
	{
		name:    "badge-check",
		tags:    createTags(
			"badge-check",
			"badge",
			"check",

			"member",
			"official",
			"pro",
			"status",
			"verified",
		),
		solid:   Hero.BadgeCheckSolidSm,
		outline: Hero.BadgeCheckOutlineMd,
		status:  "new",
	},
	{
		name:    "ban",
		tags:    createTags(
			"ban",

			"cancel",
			"enforce",
			"restrict",
			"stop",
		),
		solid:   Hero.BanSolidSm,
		outline: Hero.BanOutlineMd,
		status:  "new",
	},
	{
		name:    "bell",
		tags:    createTags(
			"bell",

			// Use plural form
			"alerts",
			"news",
			"notifications",
		),
		solid:   Hero.BellSolidSm,
		outline: Hero.BellOutlineMd,
	},
	{
		name:    "bookmark",
		tags:    createTags(
			"bookmark",

			"book",
			"chapter",
			"diary",
			"journal",
			"read",
		),
		solid:   Hero.BookmarkSolidSm,
		outline: Hero.BookmarkOutlineMd,
	},
	{
		name:    "book-open",
		tags:    createTags(
			"book-open",
			"book",
			"open",

			"book",
			"chapter",
			"diary",
			"journal",
			"read",
		),
		solid:   Hero.BookOpenSolidSm,
		outline: Hero.BookOpenOutlineMd,
	},
	{
		name:    "briefcase",
		tags:    createTags(
			"briefcase",

			"bag",
			"business",
			"satchel",
			"suitcase",
			"travel",
		),
		solid:   Hero.BriefcaseSolidSm,
		outline: Hero.BriefcaseOutlineMd,
	},
	{
		name:    "calendar",
		tags:    createTags(
			"calendar",

			// Use plural form
			"dates",
			"events",
			"schedule",
			["days", "months", "years"],
		),
		solid:   Hero.CalendarSolidSm,
		outline: Hero.CalendarOutlineMd,
	},
	{
		name:    "camera",
		tags:    createTags(
			...categories.photography,
			"camera",
		),
		solid:   Hero.CameraSolidSm,
		outline: Hero.CameraOutlineMd,
	},
	{
		name:    "cash",
		tags:    createTags("cash"),
		solid:   Hero.CashSolidSm,
		outline: Hero.CashOutlineMd,
	},
	{
		name:    "chart-pie",
		tags:    createTags(
			"chart-pie",
			"chart",
			"pie",

			"data",
			"statistics",
			"stats",
		),
		solid:   Hero.ChartPieSolidSm,
		outline: Hero.ChartPieOutlineMd,
	},
	{
		name:    "chat-alt",
		tags:    createTags(
			...categories.chatAsync,
			...categories.chatSync,
			...categories.ellisis,
			"chat-alt",
			"chat",
			"alt",
		),
		solid:   Hero.ChatAltSolidSm,
		outline: Hero.ChatAltOutlineMd,
		status:  "new",
	},
	{
		name:    "chat",
		tags:    createTags(
			...categories.chatAsync,
			...categories.chatSync,
			...categories.ellisis,
			"chat",
		),
		solid:   Hero.ChatSolidSm,
		outline: Hero.ChatOutlineMd,
	},
	{
		name:    "check-circle",
		tags:    createTags(
			"check-circle",
			"check",
			"circle",
		),
		solid:   Hero.CheckCircleSolidSm,
		outline: Hero.CheckCircleOutlineMd,
	},
	{
		name:    "check",
		tags:    createTags("check"),
		solid:   Hero.CheckSolidSm,
		outline: Hero.CheckOutlineMd,
	},
	{
		name:    "cheveron-down",
		tags:    createTags(
			...categories.arrows,
			...categories.direction,
			"cheveron-down",
			"cheveron",
			"down",
		),
		solid:   Hero.CheveronDownSolidSm,
		outline: Hero.CheveronDownOutlineMd,
	},
	{
		name:    "cheveron-left",
		tags:    createTags(
			...categories.arrows,
			...categories.direction,
			"cheveron-left",
			"cheveron",
			"left",
		),
		solid:   Hero.CheveronLeftSolidSm,
		outline: Hero.CheveronLeftOutlineMd,
	},
	{
		name:    "cheveron-right",
		tags:    createTags(
			...categories.arrows,
			...categories.direction,
			"cheveron-right",
			"cheveron",
			"right",
		),
		solid:   Hero.CheveronRightSolidSm,
		outline: Hero.CheveronRightOutlineMd,
	},
	{
		name:    "cheveron-up",
		tags:    createTags(
			...categories.arrows,
			...categories.direction,
			"cheveron-up",
			"cheveron",
			"up",
		),
		solid:   Hero.CheveronUpSolidSm,
		outline: Hero.CheveronUpOutlineMd,
	},
	{
		name:    "clipboard-check",
		tags:    createTags(
			...categories.copypasta,
			"clipboard-check",
			"clipboard",
			"check",
		),
		solid:   Hero.ClipboardCheckSolidSm,
		outline: Hero.ClipboardCheckOutlineMd,
	},
	{
		name:    "clipboard-copy",
		tags:    createTags(
			...categories.copypasta,
			"clipboard-copy",
			"clipboard",
			"copy",
		),
		solid:   Hero.ClipboardCopySolidSm,
		outline: Hero.ClipboardCopyOutlineMd,
	},
	{
		name:    "clipboard-list",
		tags:    createTags(
			...categories.copypasta,
			"clipboard-list",
			"clipboard",
			"list",
		),
		solid:   Hero.ClipboardListSolidSm,
		outline: Hero.ClipboardListOutlineMd,
	},
	{
		name:    "clipboard",
		tags:    createTags(
			...categories.copypasta,
			"clipboard",
		),
		solid:   Hero.ClipboardSolidSm,
		outline: Hero.ClipboardOutlineMd,
	},
	{
		name:    "clock",
		tags:    createTags("clock"),
		solid:   Hero.ClockSolidSm,
		outline: Hero.ClockOutlineMd,
	},
	{
		name:    "cloud-download",
		tags:    createTags(
			"cloud-download",
			"cloud",
			"download",
		),
		solid:   Hero.CloudDownloadSolidSm,
		outline: Hero.CloudDownloadOutlineMd,
	},
	{
		name:    "cloud-upload",
		tags:    createTags(
			"cloud-upload",
			"cloud",
			"upload",
		),
		solid:   Hero.CloudUploadSolidSm,
		outline: Hero.CloudUploadOutlineMd,
	},
	{
		name:    "code",
		tags:    createTags("code"),
		solid:   Hero.CodeSolidSm,
		outline: Hero.CodeOutlineMd,
	},
	{
		name:    "cog",
		tags:    createTags(
			...categories.settings,
			"cog",
		),
		solid:   Hero.CogSolidSm,
		outline: Hero.CogOutlineMd,
	},
	{
		name:    "collection",
		tags:    createTags("collection"),
		solid:   Hero.CollectionSolidSm,
		outline: Hero.CollectionOutlineMd,
	},
	{
		name:    "color-swatch",
		tags:    createTags(
			"color-swatch",
			"color",
			"swatch",
		),
		solid:   Hero.ColorSwatchSolidSm,
		outline: Hero.ColorSwatchOutlineMd,
	},
	{
		name:    "credit-card",
		tags:    createTags(
			"credit-card",
			"credit",
			"card",
		),
		solid:   Hero.CreditCardSolidSm,
		outline: Hero.CreditCardOutlineMd,
	},
	{
		name:    "currency-dollar",
		tags:    createTags(
			"currency-dollar",
			"currency",
			"dollar",
		),
		solid:   Hero.CurrencyDollarSolidSm,
		outline: Hero.CurrencyDollarOutlineMd,
	},
	{
		name:    "currency-euro",
		tags:    createTags(
			"currency-euro",
			"currency",
			"euro",
		),
		solid:   Hero.CurrencyEuroSolidSm,
		outline: Hero.CurrencyEuroOutlineMd,
	},
	{
		name:    "currency-pound",
		tags:    createTags(
			"currency-pound",
			"currency",
			"pound",
		),
		solid:   Hero.CurrencyPoundSolidSm,
		outline: Hero.CurrencyPoundOutlineMd,
	},
	{
		name:    "currency-rupee",
		tags:    createTags(
			"currency-rupee",
			"currency",
			"rupee",
		),
		solid:   Hero.CurrencyRupeeSolidSm,
		outline: Hero.CurrencyRupeeOutlineMd,
	},
	{
		name:    "currency-yen",
		tags:    createTags(
			"currency-yen",
			"currency",
			"yen",
		),
		solid:   Hero.CurrencyYenSolidSm,
		outline: Hero.CurrencyYenOutlineMd,
	},
	{
		name:    "cursor-click",
		tags:    createTags(
			"cursor-click",
			"cursor",
			"click",
		),
		solid:   Hero.CursorClickSolidSm,
		outline: Hero.CursorClickOutlineMd,
		status:  "new",
	},
	{
		name:    "document-add",
		tags:    createTags(
			"document-add",
			"document",
			"add",
		),
		solid:   Hero.DocumentAddSolidSm,
		outline: Hero.DocumentAddOutlineMd,
	},
	{
		name:    "document-download",
		tags:    createTags(
			"document-download",
			"document",
			"download",
		),
		solid:   Hero.DocumentDownloadSolidSm,
		outline: Hero.DocumentDownloadOutlineMd,
	},
	{
		name:    "document-duplicate",
		tags:    createTags(
			...categories.copypasta,
			"document-duplicate",
			"document",
			"duplicate",
		),
		solid:   Hero.DocumentDuplicateSolidSm,
		outline: Hero.DocumentDuplicateOutlineMd,
	},
	{
		name:    "document-remove",
		tags:    createTags(
			"document-remove",
			"document",
			"remove",
		),
		solid:   Hero.DocumentRemoveSolidSm,
		outline: Hero.DocumentRemoveOutlineMd,
	},
	{
		name:    "document-report",
		tags:    createTags(
			"document-report",
			"document",
			"report",
		),
		solid:   Hero.DocumentReportSolidSm,
		outline: Hero.DocumentReportOutlineMd,
		status:  "new",
	},
	{
		name:    "document",
		tags:    createTags("document"),
		solid:   Hero.DocumentSolidSm,
		outline: Hero.DocumentOutlineMd,
	},
	{
		name:    "dots-circle-horizontal",
		tags:    createTags(
			...categories.ellisis,
			...categories.more,
			"dots-circle-horizontal",
			"dots",
			"circle",
			"horizontal",
		),
		solid:   Hero.DotsCircleHorizontalSolidSm,
		outline: Hero.DotsCircleHorizontalOutlineMd,
	},
	{
		name:    "dots-horizontal",
		tags:    createTags(
			...categories.ellisis,
			...categories.more,
			"dots-horizontal",
			"dots",
			"horizontal",
		),
		solid:   Hero.DotsHorizontalSolidSm,
		outline: Hero.DotsHorizontalOutlineMd,
	},
	{
		name:    "dots-vertical",
		tags:    createTags(
			...categories.ellisis,
			...categories.more,
			"dots-vertical",
			"dots",
			"vertical",
		),
		solid:   Hero.DotsVerticalSolidSm,
		outline: Hero.DotsVerticalOutlineMd,
	},
	{
		name:    "download",
		tags:    createTags("download"),
		solid:   Hero.DownloadSolidSm,
		outline: Hero.DownloadOutlineMd,
	},
	{
		name:    "duplicate",
		tags:    createTags(
			...categories.copypasta,
			"duplicate",
		),
		solid:   Hero.DuplicateSolidSm,
		outline: Hero.DuplicateOutlineMd,
	},
	{
		name:    "emoji-happy",
		tags:    createTags(
			...categories.emotions,
			"emoji-happy",
			"emoji",
			"happy",

			"feedback",
		),
		solid:   Hero.EmojiHappySolidSm,
		outline: Hero.EmojiHappyOutlineMd,
	},
	{
		name:    "emoji-sad",
		tags:    createTags(
			...categories.emotions,
			"emoji-sad",
			"emoji",
			"sad",

			"feedback",
		),
		solid:   Hero.EmojiSadSolidSm,
		outline: Hero.EmojiSadOutlineMd,
	},
	{
		name:    "exclamation-circle",
		tags:    createTags(
			"exclamation-circle",
			"exclamation",
			"circle",
		),
		solid:   Hero.ExclamationCircleSolidSm,
		outline: Hero.ExclamationCircleOutlineMd,
	},
	{
		name:    "exclamation",
		tags:    createTags("exclamation"),
		solid:   Hero.ExclamationSolidSm,
		outline: Hero.ExclamationOutlineMd,
	},
	{
		name:    "external-link",
		tags:    createTags(
			"external-link",
			"external",
			"link",
		),
		solid:   Hero.ExternalLinkSolidSm,
		outline: Hero.ExternalLinkOutlineMd,
	},
	{
		name:    "eye",
		tags:    createTags("eye"),
		solid:   Hero.EyeSolidSm,
		outline: Hero.EyeOutlineMd,
	},
	{
		name:    "filter",
		tags:    createTags("filter"),
		solid:   Hero.FilterSolidSm,
		outline: Hero.FilterOutlineMd,
	},
	{
		name:    "flag",
		tags:    createTags("flag"),
		solid:   Hero.FlagSolidSm,
		outline: Hero.FlagOutlineMd,
	},
	{
		name:    "folder",
		tags:    createTags(
			...categories.folder,
			"folder",
		),
		solid:   Hero.FolderSolidSm,
		outline: Hero.FolderOutlineMd,
	},
	{
		name:    "globe-alt",
		tags:    createTags(
			"globe-alt",
			"globe",
			"alt",
		),
		solid:   Hero.GlobeAltSolidSm,
		outline: Hero.GlobeAltOutlineMd,
	},
	{
		name:    "globe",
		tags:    createTags("globe"),
		solid:   Hero.GlobeSolidSm,
		outline: Hero.GlobeOutlineMd,
	},
	{
		name:    "hashtag",
		tags:    createTags("hashtag"),
		solid:   Hero.HashtagSolidSm,
		outline: Hero.HashtagOutlineMd,
	},
	{
		name:    "heart",
		tags:    createTags("heart"),
		solid:   Hero.HeartSolidSm,
		outline: Hero.HeartOutlineMd,
	},
	{
		name:    "home",
		tags:    createTags("home"),
		solid:   Hero.HomeSolidSm,
		outline: Hero.HomeOutlineMd,
	},
	{
		name:    "inbox-in",
		tags:    createTags(
			"inbox-in",
			"inbox",
			"in",
		),
		solid:   Hero.InboxInSolidSm,
		outline: Hero.InboxInOutlineMd,
	},
	{
		name:    "inbox",
		tags:    createTags("inbox"),
		solid:   Hero.InboxSolidSm,
		outline: Hero.InboxOutlineMd,
	},
	{
		name:    "information-circle",
		tags:    createTags(
			"information-circle",
			"information",
			"circle",
		),
		solid:   Hero.InformationCircleSolidSm,
		outline: Hero.InformationCircleOutlineMd,
	},
	{
		name:    "key",
		tags:    createTags("key"),
		solid:   Hero.KeySolidSm,
		outline: Hero.KeyOutlineMd,
		status:  "new",
	},
	{
		name:    "light-bulb",
		tags:    createTags(
			"light-bulb",
			"light",
			"bulb",
		),
		solid:   Hero.LightBulbSolidSm,
		outline: Hero.LightBulbOutlineMd,
	},
	{
		name:    "lightning-bolt",
		tags:    createTags(
			"lightning-bolt",
			"lightning",
			"bolt",
		),
		solid:   Hero.LightningBoltSolidSm,
		outline: Hero.LightningBoltOutlineMd,
	},
	{
		name:    "link",
		tags:    createTags("link"),
		solid:   Hero.LinkSolidSm,
		outline: Hero.LinkOutlineMd,
	},
	{
		name:    "location-marker",
		tags:    createTags(
			"location-marker",
			"location",
			"marker",
		),
		solid:   Hero.LocationMarkerSolidSm,
		outline: Hero.LocationMarkerOutlineMd,
	},
	{
		name:    "lock-closed",
		tags:    createTags(
			"lock-closed",
			"lock",
			"closed",
		),
		solid:   Hero.LockClosedSolidSm,
		outline: Hero.LockClosedOutlineMd,
	},
	{
		name:    "lock-open",
		tags:    createTags(
			"lock-open",
			"lock",
			"open",
		),
		solid:   Hero.LockOpenSolidSm,
		outline: Hero.LockOpenOutlineMd,
	},
	{
		name:    "logout",
		tags:    createTags("logout"),
		solid:   Hero.LogoutSolidSm,
		outline: Hero.LogoutOutlineMd,
		status:  "new",
	},
	{
		name:    "mail-open",
		tags:    createTags(
			...categories.chatSync,
			...categories.email,
			"mail-open",
			"mail",
			"open",
		),
		solid:   Hero.MailOpenSolidSm,
		outline: Hero.MailOpenOutlineMd,
	},
	{
		name:    "mail",
		tags:    createTags(
			...categories.chatSync,
			...categories.email,
			"mail",
		),
		solid:   Hero.MailSolidSm,
		outline: Hero.MailOutlineMd,
	},
	{
		name:    "menu-alt-1",
		tags:    createTags(
			...categories.formatting,
			"menu-alt-1",
			"menu",
			"alt",
			"1",
		),
		solid:   Hero.MenuAlt1SolidSm,
		outline: Hero.MenuAlt1OutlineMd,
	},
	{
		name:    "menu-alt-2",
		tags:    createTags(
			...categories.formatting,
			"menu-alt-2",
			"menu",
			"alt",
			"2",
		),
		solid:   Hero.MenuAlt2SolidSm,
		outline: Hero.MenuAlt2OutlineMd,
	},
	{
		name:    "menu-alt-3",
		tags:    createTags(
			...categories.formatting,
			"menu-alt-3",
			"menu",
			"alt",
			"3",
		),
		solid:   Hero.MenuAlt3SolidSm,
		outline: Hero.MenuAlt3OutlineMd,
	},
	{
		name:    "menu-alt-4",
		tags:    createTags(
			...categories.formatting,
			"menu-alt-4",
			"menu",
			"alt",
			"4",
		),
		solid:   Hero.MenuAlt4SolidSm,
		outline: Hero.MenuAlt4OutlineMd,
	},
	{
		name:    "menu",
		tags:    createTags(
			...categories.formatting,
			"menu",
		),
		solid:   Hero.MenuSolidSm,
		outline: Hero.MenuOutlineMd,
	},
	{
		name:    "microphone",
		tags:    createTags("microphone"),
		solid:   Hero.MicrophoneSolidSm,
		outline: Hero.MicrophoneOutlineMd,
		status:  "new",
	},
	{
		name:    "minus-circle",
		tags:    createTags(
			"minus-circle",
			"minus",
			"circle",
		),
		solid:   Hero.MinusCircleSolidSm,
		outline: Hero.MinusCircleOutlineMd,
	},
	{
		name:    "moon",
		tags:    createTags(
			...categories.darkMode,
			"moon",
		),
		solid:   Hero.MoonSolidSm,
		outline: Hero.MoonOutlineMd,
	},
	{
		name:    "office-building",
		tags:    createTags(
			"office-building",
			"office",
			"building",
		),
		solid:   Hero.OfficeBuildingSolidSm,
		outline: Hero.OfficeBuildingOutlineMd,
	},
	{
		name:    "paper-clip",
		tags:    createTags(
			...categories.copypasta,
			"paper-clip",
			"paper",
			"clip",
		),
		solid:   Hero.PaperClipSolidSm,
		outline: Hero.PaperClipOutlineMd,
	},
	{
		name:    "pencil-alt",
		tags:    createTags(
			"pencil-alt",
			"pencil",
			"alt",
		),
		solid:   Hero.PencilAltSolidSm,
		outline: Hero.PencilAltOutlineMd,
	},
	{
		name:    "pencil",
		tags:    createTags("pencil"),
		solid:   Hero.PencilSolidSm,
		outline: Hero.PencilOutlineMd,
	},
	{
		name:    "phone-incoming",
		tags:    createTags(
			"phone-incoming",
			"phone",
			"incoming",
		),
		solid:   Hero.PhoneIncomingSolidSm,
		outline: Hero.PhoneIncomingOutlineMd,
	},
	{
		name:    "phone-outgoing",
		tags:    createTags(
			"phone-outgoing",
			"phone",
			"outgoing",
		),
		solid:   Hero.PhoneOutgoingSolidSm,
		outline: Hero.PhoneOutgoingOutlineMd,
	},
	{
		name:    "phone",
		tags:    createTags("phone"),
		solid:   Hero.PhoneSolidSm,
		outline: Hero.PhoneOutlineMd,
	},
	{
		name:    "photograph",
		tags:    createTags(
			...categories.photography,
			"photograph",
		),
		solid:   Hero.PhotographSolidSm,
		outline: Hero.PhotographOutlineMd,
	},
	{
		name:    "plus-circle",
		tags:    createTags(
			"plus-circle",
			"plus",
			"circle",
		),
		solid:   Hero.PlusCircleSolidSm,
		outline: Hero.PlusCircleOutlineMd,
	},
	{
		name:    "plus",
		tags:    createTags("plus"),
		solid:   Hero.PlusSolidSm,
		outline: Hero.PlusOutlineMd,
	},
	{
		name:    "printer",
		tags:    createTags("printer"),
		solid:   Hero.PrinterSolidSm,
		outline: Hero.PrinterOutlineMd,
	},
	{
		name:    "qrcode",
		tags:    createTags("qrcode"),
		solid:   Hero.QRCodeSolidSm,
		outline: Hero.QRCodeOutlineMd,
	},
	{
		name:    "question-mark-circle",
		tags:    createTags(
			"question-mark-circle",
			"question",
			"mark",
			"circle",
		),
		solid:   Hero.QuestionMarkCircleSolidSm,
		outline: Hero.QuestionMarkCircleOutlineMd,
	},
	{
		name:    "receipt-refund",
		tags:    createTags(
			"receipt-refund",
			"receipt",
			"refund",
		),
		solid:   Hero.ReceiptRefundSolidSm,
		outline: Hero.ReceiptRefundOutlineMd,
	},
	{
		name:    "refresh",
		tags:    createTags("refresh"),
		solid:   Hero.RefreshSolidSm,
		outline: Hero.RefreshOutlineMd,
	},
	{
		name:    "reply",
		tags:    createTags("reply"),
		solid:   Hero.ReplySolidSm,
		outline: Hero.ReplyOutlineMd,
	},
	{
		name:    "scale",
		tags:    createTags("scale"),
		solid:   Hero.ScaleSolidSm,
		outline: Hero.ScaleOutlineMd,
	},
	{
		name:    "search",
		tags:    createTags("search"),
		solid:   Hero.SearchSolidSm,
		outline: Hero.SearchOutlineMd,
	},
	{
		name:    "selector",
		tags:    createTags(
			...categories.direction,
			"selector",
		),
		solid:   Hero.SelectorSolidSm,
		outline: Hero.SelectorOutlineMd,
	},
	{
		name:    "share",
		tags:    createTags("share"),
		solid:   Hero.ShareSolidSm,
		outline: Hero.ShareOutlineMd,
	},
	{
		name:    "shield-check",
		tags:    createTags(
			"shield-check",
			"shield",
			"check",
		),
		solid:   Hero.ShieldCheckSolidSm,
		outline: Hero.ShieldCheckOutlineMd,
	},
	{
		name:    "shield-exclamation",
		tags:    createTags(
			"shield-exclamation",
			"shield",
			"exclamation",
		),
		solid:   Hero.ShieldExclamationSolidSm,
		outline: Hero.ShieldExclamationOutlineMd,
	},
	{
		name:    "shopping-cart",
		tags:    createTags(
			"shopping-cart",
			"shopping",
			"cart",
		),
		solid:   Hero.ShoppingCartSolidSm,
		outline: Hero.ShoppingCartOutlineMd,
		status:  "new",
	},
	{
		name:    "sort-ascending",
		tags:    createTags(
			...categories.formatting,
			"sort-ascending",
			"sort",
			"ascending",
		),
		solid:   Hero.SortAscendingSolidSm,
		outline: Hero.SortAscendingOutlineMd,
	},
	{
		name:    "sort-descending",
		tags:    createTags(
			...categories.formatting,
			"sort-descending",
			"sort",
			"descending",
		),
		solid:   Hero.SortDescendingSolidSm,
		outline: Hero.SortDescendingOutlineMd,
	},
	{
		name:    "sparkles",
		tags:    createTags(
			"sparkles",

			"magic",
			"space",
			"stars",
			"twinkle",
		),
		solid:   Hero.SparklesSolidSm,
		outline: Hero.SparklesOutlineMd,
	},
	{
		name:    "speakerphone",
		tags:    createTags("speakerphone"),
		solid:   Hero.SpeakerphoneSolidSm,
		outline: Hero.SpeakerphoneOutlineMd,
		status:  "new",
	},
	{
		name:    "sun",
		tags:    createTags(
			...categories.darkMode,
			"sun",
		),
		solid:   Hero.SunSolidSm,
		outline: Hero.SunOutlineMd,
	},
	{
		name:    "switch-horizontal",
		tags:    createTags(
			...categories.direction,
			"switch-horizontal",
			"switch",
			"horizontal",
		),
		solid:   Hero.SwitchHorizontalSolidSm,
		outline: Hero.SwitchHorizontalOutlineMd,
	},
	{
		name:    "switch-vertical",
		tags:    createTags(
			...categories.direction,
			"switch-vertical",
			"switch",
			"vertical",
		),
		solid:   Hero.SwitchVerticalSolidSm,
		outline: Hero.SwitchVerticalOutlineMd,
	},
	{
		name:    "tag",
		tags:    createTags("tag"),
		solid:   Hero.TagSolidSm,
		outline: Hero.TagOutlineMd,
	},
	{
		name:    "template",
		tags:    createTags("template"),
		solid:   Hero.TemplateSolidSm,
		outline: Hero.TemplateOutlineMd,
	},
	{
		name:    "ticket",
		tags:    createTags("ticket"),
		solid:   Hero.TicketSolidSm,
		outline: Hero.TicketOutlineMd,
	},
	{
		name:    "translate",
		tags:    createTags("translate"),
		solid:   Hero.TranslateSolidSm,
		outline: Hero.TranslateOutlineMd,
	},
	{
		name:    "trash",
		tags:    createTags("trash"),
		solid:   Hero.TrashSolidSm,
		outline: Hero.TrashOutlineMd,
	},
	{
		name:    "trending-down",
		tags:    createTags(
			...categories.arrows,
			"trending-down",
			"trending",
			"down",
		),
		solid:   Hero.TrendingDownSolidSm,
		outline: Hero.TrendingDownOutlineMd,
	},
	{
		name:    "trending-up",
		tags:    createTags(
			...categories.arrows,
			"trending-up",
			"trending",
			"up",
		),
		solid:   Hero.TrendingUpSolidSm,
		outline: Hero.TrendingUpOutlineMd,
	},
	{
		name:    "upload",
		tags:    createTags("upload"),
		solid:   Hero.UploadSolidSm,
		outline: Hero.UploadOutlineMd,
	},
	{
		name:    "user-add",
		tags:    createTags(
			"user-add",
			"user",
			"add",
		),
		solid:   Hero.UserAddSolidSm,
		outline: Hero.UserAddOutlineMd,
	},
	{
		name:    "user-circle",
		tags:    createTags(
			"user-circle",
			"user",
			"circle",
		),
		solid:   Hero.UserCircleSolidSm,
		outline: Hero.UserCircleOutlineMd,
	},
	{
		name:    "user-group",
		tags:    createTags(
			"user-group",
			"user",
			"group",
		),
		solid:   Hero.UserGroupSolidSm,
		outline: Hero.UserGroupOutlineMd,
	},
	{
		name:    "user-remove",
		tags:    createTags(
			"user-remove",
			"user",
			"remove",
		),
		solid:   Hero.UserRemoveSolidSm,
		outline: Hero.UserRemoveOutlineMd,
	},
	{
		name:    "user",
		tags:    createTags("user"),
		solid:   Hero.UserSolidSm,
		outline: Hero.UserOutlineMd,
	},
	{
		name:    "users",
		tags:    createTags("users"),
		solid:   Hero.UsersSolidSm,
		outline: Hero.UsersOutlineMd,
	},
	{
		name:    "view-boards",
		tags:    createTags(
			"view-boards",
			"view",
			"boards",

			"column",
			"row",
		),
		solid:   Hero.ViewBoardsSolidSm,
		outline: Hero.ViewBoardsOutlineMd,
	},
	{
		name:    "view-list",
		tags:    createTags(
			"view-list",
			"view",
			"list",

			"column",
			"row",
		),
		solid:   Hero.ViewListSolidSm,
		outline: Hero.ViewListOutlineMd,
	},
	{
		name:    "volume-off",
		tags:    createTags(
			"volume-off",
			"volume",
			"off",

			"sound",
			"speaker",
			["quiet", "loud"],
		),
		solid:   Hero.VolumeOffSolidSm,
		outline: Hero.VolumeOffOutlineMd,
	},
	{
		name:    "volume-up",
		tags:    createTags(
			"volume-up",
			"volume",
			"up",

			"sound",
			"speaker",
			["quiet", "loud"],
		),
		solid:   Hero.VolumeUpSolidSm,
		outline: Hero.VolumeUpOutlineMd,
	},
	{
		name:    "x-circle",
		tags:    createTags(
			"x-circle",
			"x",
			"circle",
		),
		solid:   Hero.XCircleSolidSm,
		outline: Hero.XCircleOutlineMd,
	},
	{
		name:    "x",
		tags:    createTags("x"),
		solid:   Hero.XSolidSm,
		outline: Hero.XOutlineMd,
	},
	{
		name:    "zoom-in",
		tags:    createTags(
			"zoom-in",
			"zoom",
			"in",
		),
		solid:   Hero.ZoomInSolidSm,
		outline: Hero.ZoomInOutlineMd,
	},
	{
		name:    "zoom-out",
		tags:    createTags(
			"zoom-out",
			"zoom",
			"out",
		),
		solid:   Hero.ZoomOutSolidSm,
		outline: Hero.ZoomOutOutlineMd,
	},
]

export default originalIcons
