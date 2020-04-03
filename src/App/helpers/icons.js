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

// TODO: Dedupe array
const categories = {

	continuity: flatten([
		"continuity",

		"continue",
		["back", "next"],
		["backwards", "forwards"],
	]),

	direction: flatten([
		"direction",

		["left", "right", "up", "down"], // Lsorted
	]),

	navigation: flatten([
		"navigation",

		["west", "east", "north", "south"], // Lsorted
	]),

	emotions: flatten([
		"emotions",

		["sad", "happy"], // Lsorted
		["negative", "positive"], // Lsorted
	]),

	formatting: flatten([
		["format", "formatting"],

		"wysiwyg",
		["column", "row"], // Lsorted
		["horizontal", "vertical"], // Lsorted
		["italic", "bold"], // Lsorted
		["justify", "align"], // Lsorted
	]),

	darkMode: flatten([
		["dark mode", "dark-mode"],
	]),

}

const originalIcons = [
	{
		name:    "adjustments",
		tags:    [
			"adjustments",

			"configuration",
			"configure",
			"controls",
			"preferences",
			"settings",
			"sliders",
		],
		solid:   Hero.AdjustmentsSolidSm,
		outline: Hero.AdjustmentsOutlineMd,
	},
	{
		name:    "annotation",
		tags:    [
			"annotation",

			"annotate",
			"bubble",
			"chat",
			"comment",
			"suggestion",
		],
		solid:   Hero.AnnotationSolidSm,
		outline: Hero.AnnotationOutlineMd,
	},
	{
		name:    "archive",
		tags:    [
			"archive",

			"bin",
		],
		solid:   Hero.ArchiveSolidSm,
		outline: Hero.ArchiveOutlineMd,
	},
	{
		name:    "arrow-circle-down",
		tags:    [
			...categories.direction,
			"arrow-circle-down",
			"arrow",
			"circle",
			"down",
		],
		solid:   Hero.ArrowCircleDownSolidSm,
		outline: Hero.ArrowCircleDownOutlineMd,
	},
	{
		name:    "arrow-circle-left",
		tags:    [
			...categories.direction,
			"arrow-circle-left",
			"arrow",
			"circle",
			"left",
		],
		solid:   Hero.ArrowCircleLeftSolidSm,
		outline: Hero.ArrowCircleLeftOutlineMd,
	},
	{
		name:    "arrow-circle-right",
		tags:    [
			...categories.direction,
			"arrow-circle-right",
			"arrow",
			"circle",
			"right",
		],
		solid:   Hero.ArrowCircleRightSolidSm,
		outline: Hero.ArrowCircleRightOutlineMd,
	},
	{
		name:    "arrow-circle-up",
		tags:    [
			...categories.direction,
			"arrow-circle-up",
			"arrow",
			"circle",
			"up",
		],
		solid:   Hero.ArrowCircleUpSolidSm,
		outline: Hero.ArrowCircleUpOutlineMd,
	},
	{
		name:    "arrow-down",
		tags:    [
			...categories.direction,
			"arrow-down",
			"arrow",
			"down",
		],
		solid:   Hero.ArrowDownSolidSm,
		outline: Hero.ArrowDownOutlineMd,
	},
	{
		name:    "arrow-left",
		tags:    [
			...categories.direction,
			"arrow-left",
			"arrow",
			"left",
		],
		solid:   Hero.ArrowLeftSolidSm,
		outline: Hero.ArrowLeftOutlineMd,
	},
	{
		name:    "arrow-narrow-down",
		tags:    [
			...categories.direction,
			"arrow-narrow-down",
			"arrow",
			"narrow",
			"down",
		],
		solid:   Hero.ArrowNarrowDownSolidSm,
		outline: Hero.ArrowNarrowDownOutlineMd,
	},
	{
		name:    "arrow-narrow-left",
		tags:    [
			...categories.direction,
			"arrow-narrow-left",
			"arrow",
			"narrow",
			"left",
		],
		solid:   Hero.ArrowNarrowLeftSolidSm,
		outline: Hero.ArrowNarrowLeftOutlineMd,
	},
	{
		name:    "arrow-narrow-right",
		tags:    [
			...categories.direction,
			"arrow-narrow-right",
			"arrow",
			"narrow",
			"right",
		],
		solid:   Hero.ArrowNarrowRightSolidSm,
		outline: Hero.ArrowNarrowRightOutlineMd,
	},
	{
		name:    "arrow-narrow-up",
		tags:    [
			...categories.direction,
			"arrow-narrow-up",
			"arrow",
			"narrow",
			"up",
		],
		solid:   Hero.ArrowNarrowUpSolidSm,
		outline: Hero.ArrowNarrowUpOutlineMd,
	},
	{
		name:    "arrow-right",
		tags:    [
			...categories.direction,
			"arrow-right",
			"arrow",
			"right",
		],
		solid:   Hero.ArrowRightSolidSm,
		outline: Hero.ArrowRightOutlineMd,
	},
	{
		name:    "arrow-up",
		tags:    [
			...categories.direction,
			"arrow-up",
			"arrow",
			"up",
		],
		solid:   Hero.ArrowUpSolidSm,
		outline: Hero.ArrowUpOutlineMd,
	},
	{
		name:    "at-symbol",
		tags:    [
			"at-symbol",
			"at",
			"symbol",

			"address",
			"email",
			"mail",
		],
		solid:   Hero.AtSymbolSolidSm,
		outline: Hero.AtSymbolOutlineMd,
	},
	{
		name:    "badge-check",
		tags:    [
			"badge-check",
			"badge",
			"check",

			"member",
			"pro",
			"verified",
		],
		solid:   Hero.BadgeCheckSolidSm,
		outline: Hero.BadgeCheckOutlineMd,
		status:  "new",
	},
	{
		name:    "ban",
		tags:    [
			"ban",

			"cancel",
			"enforce",
			"restrict",
			"stop",
		],
		solid:   Hero.BanSolidSm,
		outline: Hero.BanOutlineMd,
		status:  "new",
	},
	{
		name:    "bell",
		tags:    [
			"bell",

			"alert",
			"ding",
			"notification",
			"news",
		],
		solid:   Hero.BellSolidSm,
		outline: Hero.BellOutlineMd,
	},
	{
		name:    "bookmark",
		tags:    [
			"bookmark",

			"book",
			"chapter",
			"read",
			"save",
		],
		solid:   Hero.BookmarkSolidSm,
		outline: Hero.BookmarkOutlineMd,
	},
	{
		name:    "book-open",
		tags:    [
			"book-open",
			"book",
			"open",

			"chapter",
			"diary",
			"journal",
			"read",
		],
		solid:   Hero.BookOpenSolidSm,
		outline: Hero.BookOpenOutlineMd,
	},
	{
		name:    "briefcase",
		tags:    [
			"briefcase",

			"bag",
			"business",
			"diary",
			"journal",
			"suitcase",
			"travel",
		],
		solid:   Hero.BriefcaseSolidSm,
		outline: Hero.BriefcaseOutlineMd,
	},
	{
		name:    "calendar",
		tags:    [
			"calendar",
		],
		solid:   Hero.CalendarSolidSm,
		outline: Hero.CalendarOutlineMd,
	},
	{
		name:    "camera",
		tags:    [
			"camera",
		],
		solid:   Hero.CameraSolidSm,
		outline: Hero.CameraOutlineMd,
	},
	{
		name:    "cash",
		tags:    [
			"cash",
		],
		solid:   Hero.CashSolidSm,
		outline: Hero.CashOutlineMd,
	},
	{
		name:    "chart-pie",
		tags:    [
			"chart-pie",
			"chart",
			"pie",
		],
		solid:   Hero.ChartPieSolidSm,
		outline: Hero.ChartPieOutlineMd,
	},
	{
		name:    "chat-alt",
		tags:    [
			"chat-alt",
			"chat",
			"alt",
		],
		solid:   Hero.ChatAltSolidSm,
		outline: Hero.ChatAltOutlineMd,
		status:  "new",
	},
	{
		name:    "chat",
		tags:    [
			"chat",
		],
		solid:   Hero.ChatSolidSm,
		outline: Hero.ChatOutlineMd,
	},
	{
		name:    "check-circle",
		tags:    [
			"check-circle",
			"check",
			"circle",
		],
		solid:   Hero.CheckCircleSolidSm,
		outline: Hero.CheckCircleOutlineMd,
	},
	{
		name:    "check",
		tags:    [
			"check",
		],
		solid:   Hero.CheckSolidSm,
		outline: Hero.CheckOutlineMd,
	},
	{
		name:    "cheveron-down",
		tags:    [
			...categories.direction,
			"cheveron-down",
			"cheveron",
			"down",
		],
		solid:   Hero.CheveronDownSolidSm,
		outline: Hero.CheveronDownOutlineMd,
	},
	{
		name:    "cheveron-left",
		tags:    [
			...categories.direction,
			"cheveron-left",
			"cheveron",
			"left",
		],
		solid:   Hero.CheveronLeftSolidSm,
		outline: Hero.CheveronLeftOutlineMd,
	},
	{
		name:    "cheveron-right",
		tags:    [
			...categories.direction,
			"cheveron-right",
			"cheveron",
			"right",
		],
		solid:   Hero.CheveronRightSolidSm,
		outline: Hero.CheveronRightOutlineMd,
	},
	{
		name:    "cheveron-up",
		tags:    [
			...categories.direction,
			"cheveron-up",
			"cheveron",
			"up",
		],
		solid:   Hero.CheveronUpSolidSm,
		outline: Hero.CheveronUpOutlineMd,
	},
	{
		name:    "clipboard-check",
		tags:    [
			"clipboard-check",
			"clipboard",
			"check",
		],
		solid:   Hero.ClipboardCheckSolidSm,
		outline: Hero.ClipboardCheckOutlineMd,
	},
	{
		name:    "clipboard-copy",
		tags:    [
			"clipboard-copy",
			"clipboard",
			"copy",
		],
		solid:   Hero.ClipboardCopySolidSm,
		outline: Hero.ClipboardCopyOutlineMd,
	},
	{
		name:    "clipboard-list",
		tags:    [
			"clipboard-list",
			"clipboard",
			"list",
		],
		solid:   Hero.ClipboardListSolidSm,
		outline: Hero.ClipboardListOutlineMd,
	},
	{
		name:    "clipboard",
		tags:    [
			"clipboard",
		],
		solid:   Hero.ClipboardSolidSm,
		outline: Hero.ClipboardOutlineMd,
	},
	{
		name:    "clock",
		tags:    [
			"clock",
		],
		solid:   Hero.ClockSolidSm,
		outline: Hero.ClockOutlineMd,
	},
	{
		name:    "cloud-download",
		tags:    [
			"cloud-download",
			"cloud",
			"download",
		],
		solid:   Hero.CloudDownloadSolidSm,
		outline: Hero.CloudDownloadOutlineMd,
	},
	{
		name:    "cloud-upload",
		tags:    [
			"cloud-upload",
			"cloud",
			"upload",
		],
		solid:   Hero.CloudUploadSolidSm,
		outline: Hero.CloudUploadOutlineMd,
	},
	{
		name:    "code",
		tags:    [
			"code",
		],
		solid:   Hero.CodeSolidSm,
		outline: Hero.CodeOutlineMd,
	},
	{
		name:    "cog",
		tags:    [
			"cog",
		],
		solid:   Hero.CogSolidSm,
		outline: Hero.CogOutlineMd,
	},
	{
		name:    "collection",
		tags:    [
			"collection",
		],
		solid:   Hero.CollectionSolidSm,
		outline: Hero.CollectionOutlineMd,
	},
	{
		name:    "color-swatch",
		tags:    [
			"color-swatch",
			"color",
			"swatch",
		],
		solid:   Hero.ColorSwatchSolidSm,
		outline: Hero.ColorSwatchOutlineMd,
	},
	{
		name:    "credit-card",
		tags:    [
			"credit-card",
			"credit",
			"card",
		],
		solid:   Hero.CreditCardSolidSm,
		outline: Hero.CreditCardOutlineMd,
	},
	{
		name:    "currency-dollar",
		tags:    [
			"currency-dollar",
			"currency",
			"dollar",
		],
		solid:   Hero.CurrencyDollarSolidSm,
		outline: Hero.CurrencyDollarOutlineMd,
	},
	{
		name:    "currency-euro",
		tags:    [
			"currency-euro",
			"currency",
			"euro",
		],
		solid:   Hero.CurrencyEuroSolidSm,
		outline: Hero.CurrencyEuroOutlineMd,
	},
	{
		name:    "currency-pound",
		tags:    [
			"currency-pound",
			"currency",
			"pound",
		],
		solid:   Hero.CurrencyPoundSolidSm,
		outline: Hero.CurrencyPoundOutlineMd,
	},
	{
		name:    "currency-rupee",
		tags:    [
			"currency-rupee",
			"currency",
			"rupee",
		],
		solid:   Hero.CurrencyRupeeSolidSm,
		outline: Hero.CurrencyRupeeOutlineMd,
	},
	{
		name:    "currency-yen",
		tags:    [
			"currency-yen",
			"currency",
			"yen",
		],
		solid:   Hero.CurrencyYenSolidSm,
		outline: Hero.CurrencyYenOutlineMd,
	},
	{
		name:    "cursor-click",
		tags:    [
			"cursor-click",
			"cursor",
			"click",
		],
		solid:   Hero.CursorClickSolidSm,
		outline: Hero.CursorClickOutlineMd,
		status:  "new",
	},
	{
		name:    "document-add",
		tags:    [
			"document-add",
			"document",
			"add",
		],
		solid:   Hero.DocumentAddSolidSm,
		outline: Hero.DocumentAddOutlineMd,
	},
	{
		name:    "document-download",
		tags:    [
			"document-download",
			"document",
			"download",
		],
		solid:   Hero.DocumentDownloadSolidSm,
		outline: Hero.DocumentDownloadOutlineMd,
	},
	{
		name:    "document-duplicate",
		tags:    [
			"document-duplicate",
			"document",
			"duplicate",
		],
		solid:   Hero.DocumentDuplicateSolidSm,
		outline: Hero.DocumentDuplicateOutlineMd,
	},
	{
		name:    "document-remove",
		tags:    [
			"document-remove",
			"document",
			"remove",
		],
		solid:   Hero.DocumentRemoveSolidSm,
		outline: Hero.DocumentRemoveOutlineMd,
	},
	{
		name:    "document-report",
		tags:    [
			"document-report",
			"document",
			"report",
		],
		solid:   Hero.DocumentReportSolidSm,
		outline: Hero.DocumentReportOutlineMd,
		status:  "new",
	},
	{
		name:    "document",
		tags:    [
			"document",
		],
		solid:   Hero.DocumentSolidSm,
		outline: Hero.DocumentOutlineMd,
	},
	{
		name:    "dots-circle-horizontal",
		tags:    [
			"dots-circle-horizontal",
			"dots",
			"circle",
			"horizontal",
		],
		solid:   Hero.DotsCircleHorizontalSolidSm,
		outline: Hero.DotsCircleHorizontalOutlineMd,
	},
	{
		name:    "dots-horizontal",
		tags:    [
			"dots-horizontal",
			"dots",
			"horizontal",
		],
		solid:   Hero.DotsHorizontalSolidSm,
		outline: Hero.DotsHorizontalOutlineMd,
	},
	{
		name:    "dots-vertical",
		tags:    [
			"dots-vertical",
			"dots",
			"vertical",
		],
		solid:   Hero.DotsVerticalSolidSm,
		outline: Hero.DotsVerticalOutlineMd,
	},
	{
		name:    "download",
		tags:    [
			"download",
		],
		solid:   Hero.DownloadSolidSm,
		outline: Hero.DownloadOutlineMd,
	},
	{
		name:    "duplicate",
		tags:    [
			"duplicate",
		],
		solid:   Hero.DuplicateSolidSm,
		outline: Hero.DuplicateOutlineMd,
	},
	{
		name:    "emoji-happy",
		tags:    [
			...categories.emotions,
			"emoji-happy",
			"emoji",
			"happy",
		],
		solid:   Hero.EmojiHappySolidSm,
		outline: Hero.EmojiHappyOutlineMd,
	},
	{
		name:    "emoji-sad",
		tags:    [
			...categories.emotions,
			"emoji-sad",
			"emoji",
			"sad",
		],
		solid:   Hero.EmojiSadSolidSm,
		outline: Hero.EmojiSadOutlineMd,
	},
	{
		name:    "exclamation-circle",
		tags:    [
			"exclamation-circle",
			"exclamation",
			"circle",
		],
		solid:   Hero.ExclamationCircleSolidSm,
		outline: Hero.ExclamationCircleOutlineMd,
	},
	{
		name:    "exclamation",
		tags:    [
			"exclamation",
		],
		solid:   Hero.ExclamationSolidSm,
		outline: Hero.ExclamationOutlineMd,
	},
	{
		name:    "external-link",
		tags:    [
			"external-link",
			"external",
			"link",
		],
		solid:   Hero.ExternalLinkSolidSm,
		outline: Hero.ExternalLinkOutlineMd,
	},
	{
		name:    "eye",
		tags:    [
			"eye",
		],
		solid:   Hero.EyeSolidSm,
		outline: Hero.EyeOutlineMd,
	},
	{
		name:    "filter",
		tags:    [
			"filter",
		],
		solid:   Hero.FilterSolidSm,
		outline: Hero.FilterOutlineMd,
	},
	{
		name:    "flag",
		tags:    [
			"flag",
		],
		solid:   Hero.FlagSolidSm,
		outline: Hero.FlagOutlineMd,
	},
	{
		name:    "folder",
		tags:    [
			"folder",
		],
		solid:   Hero.FolderSolidSm,
		outline: Hero.FolderOutlineMd,
	},
	{
		name:    "globe-alt",
		tags:    [
			"globe-alt",
			"globe",
			"alt",
		],
		solid:   Hero.GlobeAltSolidSm,
		outline: Hero.GlobeAltOutlineMd,
	},
	{
		name:    "globe",
		tags:    [
			"globe",
		],
		solid:   Hero.GlobeSolidSm,
		outline: Hero.GlobeOutlineMd,
	},
	{
		name:    "hashtag",
		tags:    [
			"hashtag",
		],
		solid:   Hero.HashtagSolidSm,
		outline: Hero.HashtagOutlineMd,
	},
	{
		name:    "heart",
		tags:    [
			"heart",
		],
		solid:   Hero.HeartSolidSm,
		outline: Hero.HeartOutlineMd,
	},
	{
		name:    "home",
		tags:    [
			"home",
		],
		solid:   Hero.HomeSolidSm,
		outline: Hero.HomeOutlineMd,
	},
	{
		name:    "inbox-in",
		tags:    [
			"inbox-in",
			"inbox",
			"in",
		],
		solid:   Hero.InboxInSolidSm,
		outline: Hero.InboxInOutlineMd,
	},
	{
		name:    "inbox",
		tags:    [
			"inbox",
		],
		solid:   Hero.InboxSolidSm,
		outline: Hero.InboxOutlineMd,
	},
	{
		name:    "information-circle",
		tags:    [
			"information-circle",
			"information",
			"circle",
		],
		solid:   Hero.InformationCircleSolidSm,
		outline: Hero.InformationCircleOutlineMd,
	},
	{
		name:    "key",
		tags:    [
			"key",
		],
		solid:   Hero.KeySolidSm,
		outline: Hero.KeyOutlineMd,
		status:  "new",
	},
	{
		name:    "light-bulb",
		tags:    [
			"light-bulb",
			"light",
			"bulb",
		],
		solid:   Hero.LightBulbSolidSm,
		outline: Hero.LightBulbOutlineMd,
	},
	{
		name:    "lightning-bolt",
		tags:    [
			"lightning-bolt",
			"lightning",
			"bolt",
		],
		solid:   Hero.LightningBoltSolidSm,
		outline: Hero.LightningBoltOutlineMd,
	},
	{
		name:    "link",
		tags:    [
			"link",
		],
		solid:   Hero.LinkSolidSm,
		outline: Hero.LinkOutlineMd,
	},
	{
		name:    "location-marker",
		tags:    [
			"location-marker",
			"location",
			"marker",
		],
		solid:   Hero.LocationMarkerSolidSm,
		outline: Hero.LocationMarkerOutlineMd,
	},
	{
		name:    "lock-closed",
		tags:    [
			"lock-closed",
			"lock",
			"closed",
		],
		solid:   Hero.LockClosedSolidSm,
		outline: Hero.LockClosedOutlineMd,
	},
	{
		name:    "lock-open",
		tags:    [
			"lock-open",
			"lock",
			"open",
		],
		solid:   Hero.LockOpenSolidSm,
		outline: Hero.LockOpenOutlineMd,
	},
	{
		name:    "logout",
		tags:    [
			"logout",
		],
		solid:   Hero.LogoutSolidSm,
		outline: Hero.LogoutOutlineMd,
		status:  "new",
	},
	{
		name:    "mail-open",
		tags:    [
			"mail-open",
			"mail",
			"open",
		],
		solid:   Hero.MailOpenSolidSm,
		outline: Hero.MailOpenOutlineMd,
	},
	{
		name:    "mail",
		tags:    [
			"mail",
		],
		solid:   Hero.MailSolidSm,
		outline: Hero.MailOutlineMd,
	},
	{
		name:    "menu-alt-1",
		tags:    [
			...categories.formatting,
			"menu-alt-1",
			"menu",
			"alt",
			"1",
		],
		solid:   Hero.MenuAlt1SolidSm,
		outline: Hero.MenuAlt1OutlineMd,
	},
	{
		name:    "menu-alt-2",
		tags:    [
			...categories.formatting,
			"menu-alt-2",
			"menu",
			"alt",
			"2",
		],
		solid:   Hero.MenuAlt2SolidSm,
		outline: Hero.MenuAlt2OutlineMd,
	},
	{
		name:    "menu-alt-3",
		tags:    [
			...categories.formatting,
			"menu-alt-3",
			"menu",
			"alt",
			"3",
		],
		solid:   Hero.MenuAlt3SolidSm,
		outline: Hero.MenuAlt3OutlineMd,
	},
	{
		name:    "menu-alt-4",
		tags:    [
			...categories.formatting,
			"menu-alt-4",
			"menu",
			"alt",
			"4",
		],
		solid:   Hero.MenuAlt4SolidSm,
		outline: Hero.MenuAlt4OutlineMd,
	},
	{
		name:    "menu",
		tags:    [
			...categories.formatting,
			"menu",
		],
		solid:   Hero.MenuSolidSm,
		outline: Hero.MenuOutlineMd,
	},
	{
		name:    "microphone",
		tags:    [
			"microphone",
		],
		solid:   Hero.MicrophoneSolidSm,
		outline: Hero.MicrophoneOutlineMd,
		status:  "new",
	},
	{
		name:    "minus-circle",
		tags:    [
			"minus-circle",
			"minus",
			"circle",
		],
		solid:   Hero.MinusCircleSolidSm,
		outline: Hero.MinusCircleOutlineMd,
	},
	{
		name:    "moon",
		tags:    [
			...categories.darkMode,
			"moon",
		],
		solid:   Hero.MoonSolidSm,
		outline: Hero.MoonOutlineMd,
	},
	{
		name:    "office-building",
		tags:    [
			"office-building",
			"office",
			"building",
		],
		solid:   Hero.OfficeBuildingSolidSm,
		outline: Hero.OfficeBuildingOutlineMd,
	},
	{
		name:    "paper-clip",
		tags:    [
			"paper-clip",
			"paper",
			"clip",
		],
		solid:   Hero.PaperClipSolidSm,
		outline: Hero.PaperClipOutlineMd,
	},
	{
		name:    "pencil-alt",
		tags:    [
			"pencil-alt",
			"pencil",
			"alt",
		],
		solid:   Hero.PencilAltSolidSm,
		outline: Hero.PencilAltOutlineMd,
	},
	{
		name:    "pencil",
		tags:    [
			"pencil",
		],
		solid:   Hero.PencilSolidSm,
		outline: Hero.PencilOutlineMd,
	},
	{
		name:    "phone-incoming",
		tags:    [
			"phone-incoming",
			"phone",
			"incoming",
		],
		solid:   Hero.PhoneIncomingSolidSm,
		outline: Hero.PhoneIncomingOutlineMd,
	},
	{
		name:    "phone-outgoing",
		tags:    [
			"phone-outgoing",
			"phone",
			"outgoing",
		],
		solid:   Hero.PhoneOutgoingSolidSm,
		outline: Hero.PhoneOutgoingOutlineMd,
	},
	{
		name:    "phone",
		tags:    [
			"phone",
		],
		solid:   Hero.PhoneSolidSm,
		outline: Hero.PhoneOutlineMd,
	},
	{
		name:    "photograph",
		tags:    [
			"photograph",
		],
		solid:   Hero.PhotographSolidSm,
		outline: Hero.PhotographOutlineMd,
	},
	{
		name:    "plus-circle",
		tags:    [
			"plus-circle",
			"plus",
			"circle",
		],
		solid:   Hero.PlusCircleSolidSm,
		outline: Hero.PlusCircleOutlineMd,
	},
	{
		name:    "plus",
		tags:    [
			"plus",
		],
		solid:   Hero.PlusSolidSm,
		outline: Hero.PlusOutlineMd,
	},
	{
		name:    "printer",
		tags:    [
			"printer",
		],
		solid:   Hero.PrinterSolidSm,
		outline: Hero.PrinterOutlineMd,
	},
	{
		name:    "qrcode",
		tags:    [
			"qrcode",
		],
		solid:   Hero.QRCodeSolidSm,
		outline: Hero.QRCodeOutlineMd,
	},
	{
		name:    "question-mark-circle",
		tags:    [
			"question-mark-circle",
			"question",
			"mark",
			"circle",
		],
		solid:   Hero.QuestionMarkCircleSolidSm,
		outline: Hero.QuestionMarkCircleOutlineMd,
	},
	{
		name:    "receipt-refund",
		tags:    [
			"receipt-refund",
			"receipt",
			"refund",
		],
		solid:   Hero.ReceiptRefundSolidSm,
		outline: Hero.ReceiptRefundOutlineMd,
	},
	{
		name:    "refresh",
		tags:    [
			"refresh",
		],
		solid:   Hero.RefreshSolidSm,
		outline: Hero.RefreshOutlineMd,
	},
	{
		name:    "reply",
		tags:    [
			"reply",
		],
		solid:   Hero.ReplySolidSm,
		outline: Hero.ReplyOutlineMd,
	},
	{
		name:    "scale",
		tags:    [
			"scale",
		],
		solid:   Hero.ScaleSolidSm,
		outline: Hero.ScaleOutlineMd,
	},
	{
		name:    "search",
		tags:    [
			"search",
		],
		solid:   Hero.SearchSolidSm,
		outline: Hero.SearchOutlineMd,
	},
	{
		name:    "selector",
		tags:    [
			...categories.direction,
			"selector",
		],
		solid:   Hero.SelectorSolidSm,
		outline: Hero.SelectorOutlineMd,
	},
	{
		name:    "share",
		tags:    [
			"share",
		],
		solid:   Hero.ShareSolidSm,
		outline: Hero.ShareOutlineMd,
	},
	{
		name:    "shield-check",
		tags:    [
			"shield-check",
			"shield",
			"check",
		],
		solid:   Hero.ShieldCheckSolidSm,
		outline: Hero.ShieldCheckOutlineMd,
	},
	{
		name:    "shield-exclamation",
		tags:    [
			"shield-exclamation",
			"shield",
			"exclamation",
		],
		solid:   Hero.ShieldExclamationSolidSm,
		outline: Hero.ShieldExclamationOutlineMd,
	},
	{
		name:    "shopping-cart",
		tags:    [
			"shopping-cart",
			"shopping",
			"cart",
		],
		solid:   Hero.ShoppingCartSolidSm,
		outline: Hero.ShoppingCartOutlineMd,
		status:  "new",
	},
	{
		name:    "sort-ascending",
		tags:    [
			"sort-ascending",
			"sort",
			"ascending",
		],
		solid:   Hero.SortAscendingSolidSm,
		outline: Hero.SortAscendingOutlineMd,
	},
	{
		name:    "sort-descending",
		tags:    [
			"sort-descending",
			"sort",
			"descending",
		],
		solid:   Hero.SortDescendingSolidSm,
		outline: Hero.SortDescendingOutlineMd,
	},
	{
		name:    "sparkles",
		tags:    [
			"sparkles",
		],
		solid:   Hero.SparklesSolidSm,
		outline: Hero.SparklesOutlineMd,
	},
	{
		name:    "speakerphone",
		tags:    [
			"speakerphone",
		],
		solid:   Hero.SpeakerphoneSolidSm,
		outline: Hero.SpeakerphoneOutlineMd,
		status:  "new",
	},
	{
		name:    "sun",
		tags:    [
			...categories.darkMode,
			"sun",
		],
		solid:   Hero.SunSolidSm,
		outline: Hero.SunOutlineMd,
	},
	{
		name:    "switch-horizontal",
		tags:    [
			...categories.direction,
			"switch-horizontal",
			"switch",
			"horizontal",
		],
		solid:   Hero.SwitchHorizontalSolidSm,
		outline: Hero.SwitchHorizontalOutlineMd,
	},
	{
		name:    "switch-vertical",
		tags:    [
			...categories.direction,
			"switch-vertical",
			"switch",
			"vertical",
		],
		solid:   Hero.SwitchVerticalSolidSm,
		outline: Hero.SwitchVerticalOutlineMd,
	},
	{
		name:    "tag",
		tags:    [
			"tag",
		],
		solid:   Hero.TagSolidSm,
		outline: Hero.TagOutlineMd,
	},
	{
		name:    "template",
		tags:    [
			"template",
		],
		solid:   Hero.TemplateSolidSm,
		outline: Hero.TemplateOutlineMd,
	},
	{
		name:    "ticket",
		tags:    [
			"ticket",
		],
		solid:   Hero.TicketSolidSm,
		outline: Hero.TicketOutlineMd,
	},
	{
		name:    "translate",
		tags:    [
			"translate",
		],
		solid:   Hero.TranslateSolidSm,
		outline: Hero.TranslateOutlineMd,
	},
	{
		name:    "trash",
		tags:    [
			"trash",
		],
		solid:   Hero.TrashSolidSm,
		outline: Hero.TrashOutlineMd,
	},
	{
		name:    "trending-down",
		tags:    [
			"trending-down",
			"trending",
			"down",
		],
		solid:   Hero.TrendingDownSolidSm,
		outline: Hero.TrendingDownOutlineMd,
	},
	{
		name:    "trending-up",
		tags:    [
			"trending-up",
			"trending",
			"up",
		],
		solid:   Hero.TrendingUpSolidSm,
		outline: Hero.TrendingUpOutlineMd,
	},
	{
		name:    "upload",
		tags:    [
			"upload",
		],
		solid:   Hero.UploadSolidSm,
		outline: Hero.UploadOutlineMd,
	},
	{
		name:    "user-add",
		tags:    [
			"user-add",
			"user",
			"add",
		],
		solid:   Hero.UserAddSolidSm,
		outline: Hero.UserAddOutlineMd,
	},
	{
		name:    "user-circle",
		tags:    [
			"user-circle",
			"user",
			"circle",
		],
		solid:   Hero.UserCircleSolidSm,
		outline: Hero.UserCircleOutlineMd,
	},
	{
		name:    "user-group",
		tags:    [
			"user-group",
			"user",
			"group",
		],
		solid:   Hero.UserGroupSolidSm,
		outline: Hero.UserGroupOutlineMd,
	},
	{
		name:    "user-remove",
		tags:    [
			"user-remove",
			"user",
			"remove",
		],
		solid:   Hero.UserRemoveSolidSm,
		outline: Hero.UserRemoveOutlineMd,
	},
	{
		name:    "user",
		tags:    [
			"user",
		],
		solid:   Hero.UserSolidSm,
		outline: Hero.UserOutlineMd,
	},
	{
		name:    "users",
		tags:    [
			"users",
		],
		solid:   Hero.UsersSolidSm,
		outline: Hero.UsersOutlineMd,
	},
	{
		name:    "view-boards",
		tags:    [
			"view-boards",
			"view",
			"boards",
		],
		solid:   Hero.ViewBoardsSolidSm,
		outline: Hero.ViewBoardsOutlineMd,
	},
	{
		name:    "view-list",
		tags:    [
			"view-list",
			"view",
			"list",
		],
		solid:   Hero.ViewListSolidSm,
		outline: Hero.ViewListOutlineMd,
	},
	{
		name:    "volume-off",
		tags:    [
			"volume-off",
			"volume",
			"off",
		],
		solid:   Hero.VolumeOffSolidSm,
		outline: Hero.VolumeOffOutlineMd,
	},
	{
		name:    "volume-up",
		tags:    [
			"volume-up",
			"volume",
			"up",
		],
		solid:   Hero.VolumeUpSolidSm,
		outline: Hero.VolumeUpOutlineMd,
	},
	{
		name:    "x-circle",
		tags:    [
			"x-circle",
			"x",
			"circle",
		],
		solid:   Hero.XCircleSolidSm,
		outline: Hero.XCircleOutlineMd,
	},
	{
		name:    "x",
		tags:    [
			"x",
		],
		solid:   Hero.XSolidSm,
		outline: Hero.XOutlineMd,
	},
	{
		name:    "zoom-in",
		tags:    [
			"zoom-in",
			"zoom",
			"in",
		],
		solid:   Hero.ZoomInSolidSm,
		outline: Hero.ZoomInOutlineMd,
	},
	{
		name:    "zoom-out",
		tags:    [
			"zoom-out",
			"zoom",
			"out",
		],
		solid:   Hero.ZoomOutSolidSm,
		outline: Hero.ZoomOutOutlineMd,
	},
]

export default originalIcons
