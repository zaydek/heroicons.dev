import * as Hero from "react-heroicons"

const originalIcons = [
	{
		name: "adjustments",
		outline: Hero.AdjustmentsOutlineMd,
		solid: Hero.AdjustmentsSolidSm,
	},
	{
		name: "annotation",
		outline: Hero.AnnotationOutlineMd,
		solid: Hero.AnnotationSolidSm,
	},
	{
		name: "archive",
		outline: Hero.ArchiveOutlineMd,
		solid: Hero.ArchiveSolidSm,
	},
	{
		name: "arrow-circle-down",
		outline: Hero.ArrowCircleDownOutlineMd,
		solid: Hero.ArrowCircleDownSolidSm,
	},
	{
		name: "arrow-circle-left",
		outline: Hero.ArrowCircleLeftOutlineMd,
		solid: Hero.ArrowCircleLeftSolidSm,
	},
	{
		name: "arrow-circle-right",
		outline: Hero.ArrowCircleRightOutlineMd,
		solid: Hero.ArrowCircleRightSolidSm,
	},
	{
		name: "arrow-circle-up",
		outline: Hero.ArrowCircleUpOutlineMd,
		solid: Hero.ArrowCircleUpSolidSm,
	},
	{
		name: "arrow-down",
		outline: Hero.ArrowDownOutlineMd,
		solid: Hero.ArrowDownSolidSm,
	},
	{
		name: "arrow-left",
		outline: Hero.ArrowLeftOutlineMd,
		solid: Hero.ArrowLeftSolidSm,
	},
	{
		name: "arrow-narrow-down",
		outline: Hero.ArrowNarrowDownOutlineMd,
		solid: Hero.ArrowNarrowDownSolidSm,
	},
	{
		name: "arrow-narrow-left",
		outline: Hero.ArrowNarrowLeftOutlineMd,
		solid: Hero.ArrowNarrowLeftSolidSm,
	},
	{
		name: "arrow-narrow-right",
		outline: Hero.ArrowNarrowRightOutlineMd,
		solid: Hero.ArrowNarrowRightSolidSm,
	},
	{
		name: "arrow-narrow-up",
		outline: Hero.ArrowNarrowUpOutlineMd,
		solid: Hero.ArrowNarrowUpSolidSm,
	},
	{
		name: "arrow-right",
		outline: Hero.ArrowRightOutlineMd,
		solid: Hero.ArrowRightSolidSm,
	},
	{
		name: "arrow-up",
		outline: Hero.ArrowUpOutlineMd,
		solid: Hero.ArrowUpSolidSm,
	},
	{
		name: "at-symbol",
		outline: Hero.AtSymbolOutlineMd,
		solid: Hero.AtSymbolSolidSm,
	},
	{
		name: "bell",
		outline: Hero.BellOutlineMd,
		solid: Hero.BellSolidSm,
	},
	{
		name: "book-open",
		outline: Hero.BookOpenOutlineMd,
		solid: Hero.BookOpenSolidSm,
	},
	{
		name: "bookmark",
		outline: Hero.BookmarkOutlineMd,
		solid: Hero.BookmarkSolidSm,
	},
	{
		name: "briefcase",
		outline: Hero.BriefcaseOutlineMd,
		solid: Hero.BriefcaseSolidSm,
	},
	{
		name: "calendar",
		outline: Hero.CalendarOutlineMd,
		solid: Hero.CalendarSolidSm,
	},
	{
		name: "camera",
		outline: Hero.CameraOutlineMd,
		solid: Hero.CameraSolidSm,
	},
	{
		name: "cash",
		outline: Hero.CashOutlineMd,
		solid: Hero.CashSolidSm,
	},
	{
		name: "chart-pie",
		outline: Hero.ChartPieOutlineMd,
		solid: Hero.ChartPieSolidSm,
	},
	{
		name: "chat",
		outline: Hero.ChatOutlineMd,
		solid: Hero.ChatSolidSm,
	},
	{
		name: "check-circle",
		outline: Hero.CheckCircleOutlineMd,
		solid: Hero.CheckCircleSolidSm,
	},
	{
		name: "check",
		outline: Hero.CheckOutlineMd,
		solid: Hero.CheckSolidSm,
	},
	{
		name: "cheveron-down",
		outline: Hero.CheveronDownOutlineMd,
		solid: Hero.CheveronDownSolidSm,
	},
	{
		name: "cheveron-left",
		outline: Hero.CheveronLeftOutlineMd,
		solid: Hero.CheveronLeftSolidSm,
	},
	{
		name: "cheveron-right",
		outline: Hero.CheveronRightOutlineMd,
		solid: Hero.CheveronRightSolidSm,
	},
	{
		name: "cheveron-up",
		outline: Hero.CheveronUpOutlineMd,
		solid: Hero.CheveronUpSolidSm,
	},
	{
		name: "clipboard-check",
		outline: Hero.ClipboardCheckOutlineMd,
		solid: Hero.ClipboardCheckSolidSm,
	},
	{
		name: "clipboard-copy",
		outline: Hero.ClipboardCopyOutlineMd,
		solid: Hero.ClipboardCopySolidSm,
	},
	{
		name: "clipboard-list",
		outline: Hero.ClipboardListOutlineMd,
		solid: Hero.ClipboardListSolidSm,
	},
	{
		name: "clipboard",
		outline: Hero.ClipboardOutlineMd,
		solid: Hero.ClipboardSolidSm,
	},
	{
		name: "clock",
		outline: Hero.ClockOutlineMd,
		solid: Hero.ClockSolidSm,
	},
	{
		name: "cloud-download",
		outline: Hero.CloudDownloadOutlineMd,
		solid: Hero.CloudDownloadSolidSm,
	},
	{
		name: "cloud-upload",
		outline: Hero.CloudUploadOutlineMd,
		solid: Hero.CloudUploadSolidSm,
	},
	{
		name: "code",
		outline: Hero.CodeOutlineMd,
		solid: Hero.CodeSolidSm,
	},
	{
		name: "cog",
		outline: Hero.CogOutlineMd,
		solid: Hero.CogSolidSm,
	},
	{
		name: "collection",
		outline: Hero.CollectionOutlineMd,
		solid: Hero.CollectionSolidSm,
	},
	{
		name: "color-swatch",
		outline: Hero.ColorSwatchOutlineMd,
		solid: Hero.ColorSwatchSolidSm,
	},
	{
		name: "credit-card",
		outline: Hero.CreditCardOutlineMd,
		solid: Hero.CreditCardSolidSm,
	},
	{
		name: "currency-dollar",
		outline: Hero.CurrencyDollarOutlineMd,
		solid: Hero.CurrencyDollarSolidSm,
	},
	{
		name: "currency-euro",
		outline: Hero.CurrencyEuroOutlineMd,
		solid: Hero.CurrencyEuroSolidSm,
	},
	{
		name: "currency-pound",
		outline: Hero.CurrencyPoundOutlineMd,
		solid: Hero.CurrencyPoundSolidSm,
	},
	{
		name: "currency-rupee",
		outline: Hero.CurrencyRupeeOutlineMd,
		solid: Hero.CurrencyRupeeSolidSm,
	},
	{
		name: "currency-yen",
		outline: Hero.CurrencyYenOutlineMd,
		solid: Hero.CurrencyYenSolidSm,
	},
	{
		name: "document-add",
		outline: Hero.DocumentAddOutlineMd,
		solid: Hero.DocumentAddSolidSm,
	},
	{
		name: "document-download",
		outline: Hero.DocumentDownloadOutlineMd,
		solid: Hero.DocumentDownloadSolidSm,
	},
	{
		name: "document-duplicate",
		outline: Hero.DocumentDuplicateOutlineMd,
		solid: Hero.DocumentDuplicateSolidSm,
	},
	{
		name: "document-remove",
		outline: Hero.DocumentRemoveOutlineMd,
		solid: Hero.DocumentRemoveSolidSm,
	},
	{
		name: "document",
		outline: Hero.DocumentOutlineMd,
		solid: Hero.DocumentSolidSm,
	},
	{
		name: "dots-circle-horizontal",
		outline: Hero.DotsCircleHorizontalOutlineMd,
		solid: Hero.DotsCircleHorizontalSolidSm,
	},
	{
		name: "dots-horizontal",
		outline: Hero.DotsHorizontalOutlineMd,
		solid: Hero.DotsHorizontalSolidSm,
	},
	{
		name: "dots-vertical",
		outline: Hero.DotsVerticalOutlineMd,
		solid: Hero.DotsVerticalSolidSm,
	},
	{
		name: "download",
		outline: Hero.DownloadOutlineMd,
		solid: Hero.DownloadSolidSm,
	},
	{
		name: "duplicate",
		outline: Hero.DuplicateOutlineMd,
		solid: Hero.DuplicateSolidSm,
	},
	{
		name: "emoji-happy",
		outline: Hero.EmojiHappyOutlineMd,
		solid: Hero.EmojiHappySolidSm,
	},
	{
		name: "emoji-sad",
		outline: Hero.EmojiSadOutlineMd,
		solid: Hero.EmojiSadSolidSm,
	},
	{
		name: "exclamation-circle",
		outline: Hero.ExclamationCircleOutlineMd,
		solid: Hero.ExclamationCircleSolidSm,
	},
	{
		name: "exclamation",
		outline: Hero.ExclamationOutlineMd,
		solid: Hero.ExclamationSolidSm,
	},
	{
		name: "external-link",
		outline: Hero.ExternalLinkOutlineMd,
		solid: Hero.ExternalLinkSolidSm,
	},
	{
		name: "eye",
		outline: Hero.EyeOutlineMd,
		solid: Hero.EyeSolidSm,
	},
	{
		name: "filter",
		outline: Hero.FilterOutlineMd,
		solid: Hero.FilterSolidSm,
	},
	{
		name: "flag",
		outline: Hero.FlagOutlineMd,
		solid: Hero.FlagSolidSm,
	},
	{
		name: "folder",
		outline: Hero.FolderOutlineMd,
		solid: Hero.FolderSolidSm,
	},
	{
		name: "globe-alt",
		outline: Hero.GlobeAltOutlineMd,
		solid: Hero.GlobeAltSolidSm,
	},
	{
		name: "globe",
		outline: Hero.GlobeOutlineMd,
		solid: Hero.GlobeSolidSm,
	},
	{
		name: "hashtag",
		outline: Hero.HashtagOutlineMd,
		solid: Hero.HashtagSolidSm,
	},
	{
		name: "heart",
		outline: Hero.HeartOutlineMd,
		solid: Hero.HeartSolidSm,
	},
	{
		name: "home",
		outline: Hero.HomeOutlineMd,
		solid: Hero.HomeSolidSm,
	},
	{
		name: "inbox-in",
		outline: Hero.InboxInOutlineMd,
		solid: Hero.InboxInSolidSm,
	},
	{
		name: "inbox",
		outline: Hero.InboxOutlineMd,
		solid: Hero.InboxSolidSm,
	},
	{
		name: "information-circle",
		outline: Hero.InformationCircleOutlineMd,
		solid: Hero.InformationCircleSolidSm,
	},
	{
		name: "light-bulb",
		outline: Hero.LightBulbOutlineMd,
		solid: Hero.LightBulbSolidSm,
	},
	{
		name: "lightning-bolt",
		outline: Hero.LightningBoltOutlineMd,
		solid: Hero.LightningBoltSolidSm,
	},
	{
		name: "link",
		outline: Hero.LinkOutlineMd,
		solid: Hero.LinkSolidSm,
	},
	{
		name: "location-marker",
		outline: Hero.LocationMarkerOutlineMd,
		solid: Hero.LocationMarkerSolidSm,
	},
	{
		name: "lock-closed",
		outline: Hero.LockClosedOutlineMd,
		solid: Hero.LockClosedSolidSm,
	},
	{
		name: "lock-open",
		outline: Hero.LockOpenOutlineMd,
		solid: Hero.LockOpenSolidSm,
	},
	{
		name: "mail-open",
		outline: Hero.MailOpenOutlineMd,
		solid: Hero.MailOpenSolidSm,
	},
	{
		name: "mail",
		outline: Hero.MailOutlineMd,
		solid: Hero.MailSolidSm,
	},
	{
		name: "menu-alt-1",
		outline: Hero.MenuAlt1OutlineMd,
		solid: Hero.MenuAlt1SolidSm,
	},
	{
		name: "menu-alt-2",
		outline: Hero.MenuAlt2OutlineMd,
		solid: Hero.MenuAlt2SolidSm,
	},
	{
		name: "menu-alt-3",
		outline: Hero.MenuAlt3OutlineMd,
		solid: Hero.MenuAlt3SolidSm,
	},
	{
		name: "menu-alt-4",
		outline: Hero.MenuAlt4OutlineMd,
		solid: Hero.MenuAlt4SolidSm,
	},
	{
		name: "menu",
		outline: Hero.MenuOutlineMd,
		solid: Hero.MenuSolidSm,
	},
	{
		name: "minus-circle",
		outline: Hero.MinusCircleOutlineMd,
		solid: Hero.MinusCircleSolidSm,
	},
	{
		name: "moon",
		outline: Hero.MoonOutlineMd,
		solid: Hero.MoonSolidSm,
	},
	{
		name: "office-building",
		outline: Hero.OfficeBuildingOutlineMd,
		solid: Hero.OfficeBuildingSolidSm,
	},
	{
		name: "paper-clip",
		outline: Hero.PaperClipOutlineMd,
		solid: Hero.PaperClipSolidSm,
	},
	{
		name: "pencil-alt",
		outline: Hero.PencilAltOutlineMd,
		solid: Hero.PencilAltSolidSm,
	},
	{
		name: "pencil",
		outline: Hero.PencilOutlineMd,
		solid: Hero.PencilSolidSm,
	},
	{
		name: "phone-incoming",
		outline: Hero.PhoneIncomingOutlineMd,
		solid: Hero.PhoneIncomingSolidSm,
	},
	{
		name: "phone-outgoing",
		outline: Hero.PhoneOutgoingOutlineMd,
		solid: Hero.PhoneOutgoingSolidSm,
	},
	{
		name: "phone",
		outline: Hero.PhoneOutlineMd,
		solid: Hero.PhoneSolidSm,
	},
	{
		name: "photograph",
		outline: Hero.PhotographOutlineMd,
		solid: Hero.PhotographSolidSm,
	},
	{
		name: "plus-circle",
		outline: Hero.PlusCircleOutlineMd,
		solid: Hero.PlusCircleSolidSm,
	},
	{
		name: "plus",
		outline: Hero.PlusOutlineMd,
		solid: Hero.PlusSolidSm,
	},
	{
		name: "printer",
		outline: Hero.PrinterOutlineMd,
		solid: Hero.PrinterSolidSm,
	},
	{
		name: "qrcode",
		outline: Hero.QRCodeOutlineMd,
		solid: Hero.QRCodeSolidSm,
	},
	{
		name: "question-mark-circle",
		outline: Hero.QuestionMarkCircleOutlineMd,
		solid: Hero.QuestionMarkCircleSolidSm,
	},
	{
		name: "receipt-refund",
		outline: Hero.ReceiptRefundOutlineMd,
		solid: Hero.ReceiptRefundSolidSm,
	},
	{
		name: "refresh",
		outline: Hero.RefreshOutlineMd,
		solid: Hero.RefreshSolidSm,
	},
	{
		name: "reply",
		outline: Hero.ReplyOutlineMd,
		solid: Hero.ReplySolidSm,
	},
	{
		name: "scale",
		outline: Hero.ScaleOutlineMd,
		solid: Hero.ScaleSolidSm,
	},
	{
		name: "search",
		outline: Hero.SearchOutlineMd,
		solid: Hero.SearchSolidSm,
	},
	{
		name: "selector",
		outline: Hero.SelectorOutlineMd,
		solid: Hero.SelectorSolidSm,
	},
	{
		name: "share",
		outline: Hero.ShareOutlineMd,
		solid: Hero.ShareSolidSm,
	},
	{
		name: "shield-check",
		outline: Hero.ShieldCheckOutlineMd,
		solid: Hero.ShieldCheckSolidSm,
	},
	{
		name: "shield-exclamation",
		outline: Hero.ShieldExclamationOutlineMd,
		solid: Hero.ShieldExclamationSolidSm,
	},
	{
		name: "sort-ascending",
		outline: Hero.SortAscendingOutlineMd,
		solid: Hero.SortAscendingSolidSm,
	},
	{
		name: "sort-descending",
		outline: Hero.SortDescendingOutlineMd,
		solid: Hero.SortDescendingSolidSm,
	},
	{
		name: "sparkles",
		outline: Hero.SparklesOutlineMd,
		solid: Hero.SparklesSolidSm,
	},
	{
		name: "sun",
		outline: Hero.SunOutlineMd,
		solid: Hero.SunSolidSm,
	},
	{
		name: "switch-horizontal",
		outline: Hero.SwitchHorizontalOutlineMd,
		solid: Hero.SwitchHorizontalSolidSm,
	},
	{
		name: "switch-vertical",
		outline: Hero.SwitchVerticalOutlineMd,
		solid: Hero.SwitchVerticalSolidSm,
	},
	{
		name: "tag",
		outline: Hero.TagOutlineMd,
		solid: Hero.TagSolidSm,
	},
	{
		name: "template",
		outline: Hero.TemplateOutlineMd,
		solid: Hero.TemplateSolidSm,
	},
	{
		name: "ticket",
		outline: Hero.TicketOutlineMd,
		solid: Hero.TicketSolidSm,
	},
	{
		name: "translate",
		outline: Hero.TranslateOutlineMd,
		solid: Hero.TranslateSolidSm,
	},
	{
		name: "trash",
		outline: Hero.TrashOutlineMd,
		solid: Hero.TrashSolidSm,
	},
	{
		name: "trending-down",
		outline: Hero.TrendingDownOutlineMd,
		solid: Hero.TrendingDownSolidSm,
	},
	{
		name: "trending-up",
		outline: Hero.TrendingUpOutlineMd,
		solid: Hero.TrendingUpSolidSm,
	},
	{
		name: "upload",
		outline: Hero.UploadOutlineMd,
		solid: Hero.UploadSolidSm,
	},
	{
		name: "user-add",
		outline: Hero.UserAddOutlineMd,
		solid: Hero.UserAddSolidSm,
	},
	{
		name: "user-circle",
		outline: Hero.UserCircleOutlineMd,
		solid: Hero.UserCircleSolidSm,
	},
	{
		name: "user-group",
		outline: Hero.UserGroupOutlineMd,
		solid: Hero.UserGroupSolidSm,
	},
	{
		name: "user-remove",
		outline: Hero.UserRemoveOutlineMd,
		solid: Hero.UserRemoveSolidSm,
	},
	{
		name: "user",
		outline: Hero.UserOutlineMd,
		solid: Hero.UserSolidSm,
	},
	{
		name: "users",
		outline: Hero.UsersOutlineMd,
		solid: Hero.UsersSolidSm,
	},
	{
		name: "view-boards",
		outline: Hero.ViewBoardsOutlineMd,
		solid: Hero.ViewBoardsSolidSm,
	},
	{
		name: "view-list",
		outline: Hero.ViewListOutlineMd,
		solid: Hero.ViewListSolidSm,
	},
	{
		name: "volume-off",
		outline: Hero.VolumeOffOutlineMd,
		solid: Hero.VolumeOffSolidSm,
	},
	{
		name: "volume-up",
		outline: Hero.VolumeUpOutlineMd,
		solid: Hero.VolumeUpSolidSm,
	},
	{
		name: "x-circle",
		outline: Hero.XCircleOutlineMd,
		solid: Hero.XCircleSolidSm,
	},
	{
		name: "x",
		outline: Hero.XOutlineMd,
		solid: Hero.XSolidSm,
	},
	{
		name: "zoom-in",
		outline: Hero.ZoomInOutlineMd,
		solid: Hero.ZoomInSolidSm,
	},
	{
		name: "zoom-out",
		outline: Hero.ZoomOutOutlineMd,
		solid: Hero.ZoomOutSolidSm,
	},
]

export default originalIcons
