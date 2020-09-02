import * as Outline from "heroicons-0.4.1/outline"
import * as Solid from "heroicons-0.4.1/solid"
import tags from "data/tags"

const dataset = [
	{
		name: "academic-cap",
		tags: [],
		icons: {
			solid: Solid.AcademicCap,
			outline: Outline.AcademicCap,
		},
		new: true,
	},
	{
		name: "adjustments",
		tags: [],
		icons: {
			solid: Solid.Adjustments,
			outline: Outline.Adjustments,
		},
		new: false,
	},
	{
		name: "annotation",
		tags: [],
		icons: {
			solid: Solid.Annotation,
			outline: Outline.Annotation,
		},
		new: false,
	},
	{
		name: "archive",
		tags: [],
		icons: {
			solid: Solid.Archive,
			outline: Outline.Archive,
		},
		new: false,
	},
	{
		name: "arrow-circle-down",
		tags: [],
		icons: {
			solid: Solid.ArrowCircleDown,
			outline: Outline.ArrowCircleDown,
		},
		new: false,
	},
	{
		name: "arrow-circle-left",
		tags: [],
		icons: {
			solid: Solid.ArrowCircleLeft,
			outline: Outline.ArrowCircleLeft,
		},
		new: false,
	},
	{
		name: "arrow-circle-right",
		tags: [],
		icons: {
			solid: Solid.ArrowCircleRight,
			outline: Outline.ArrowCircleRight,
		},
		new: false,
	},
	{
		name: "arrow-circle-up",
		tags: [],
		icons: {
			solid: Solid.ArrowCircleUp,
			outline: Outline.ArrowCircleUp,
		},
		new: false,
	},
	{
		name: "arrow-down",
		tags: [],
		icons: {
			solid: Solid.ArrowDown,
			outline: Outline.ArrowDown,
		},
		new: false,
	},
	{
		name: "arrow-left",
		tags: [],
		icons: {
			solid: Solid.ArrowLeft,
			outline: Outline.ArrowLeft,
		},
		new: false,
	},
	{
		name: "arrow-narrow-down",
		tags: [],
		icons: {
			solid: Solid.ArrowNarrowDown,
			outline: Outline.ArrowNarrowDown,
		},
		new: false,
	},
	{
		name: "arrow-narrow-left",
		tags: [],
		icons: {
			solid: Solid.ArrowNarrowLeft,
			outline: Outline.ArrowNarrowLeft,
		},
		new: false,
	},
	{
		name: "arrow-narrow-right",
		tags: [],
		icons: {
			solid: Solid.ArrowNarrowRight,
			outline: Outline.ArrowNarrowRight,
		},
		new: false,
	},
	{
		name: "arrow-narrow-up",
		tags: [],
		icons: {
			solid: Solid.ArrowNarrowUp,
			outline: Outline.ArrowNarrowUp,
		},
		new: false,
	},
	{
		name: "arrow-right",
		tags: [],
		icons: {
			solid: Solid.ArrowRight,
			outline: Outline.ArrowRight,
		},
		new: false,
	},
	{
		name: "arrows-expand",
		tags: [],
		icons: {
			solid: Solid.ArrowsExpand,
			outline: Outline.ArrowsExpand,
		},
		new: false,
	},
	{
		name: "arrow-up",
		tags: [],
		icons: {
			solid: Solid.ArrowUp,
			outline: Outline.ArrowUp,
		},
		new: false,
	},
	{
		name: "at-symbol",
		tags: [],
		icons: {
			solid: Solid.AtSymbol,
			outline: Outline.AtSymbol,
		},
		new: false,
	},
	{
		name: "backspace",
		tags: [],
		icons: {
			solid: Solid.Backspace,
			outline: Outline.Backspace,
		},
		new: true,
	},
	{
		name: "badge-check",
		tags: [],
		icons: {
			solid: Solid.BadgeCheck,
			outline: Outline.BadgeCheck,
		},
		new: false,
	},
	{
		name: "ban",
		tags: [],
		icons: {
			solid: Solid.Ban,
			outline: Outline.Ban,
		},
		new: false,
	},
	{
		name: "beaker",
		tags: [],
		icons: {
			solid: Solid.Beaker,
			outline: Outline.Beaker,
		},
		new: true,
	},
	{
		name: "bell",
		tags: [],
		icons: {
			solid: Solid.Bell,
			outline: Outline.Bell,
		},
		new: false,
	},
	{
		name: "bookmark",
		tags: [],
		icons: {
			solid: Solid.Bookmark,
			outline: Outline.Bookmark,
		},
		new: false,
	},
	{
		name: "bookmark-alt",
		tags: [],
		icons: {
			solid: Solid.BookmarkAlt,
			outline: Outline.BookmarkAlt,
		},
		new: false,
	},
	{
		name: "book-open",
		tags: [],
		icons: {
			solid: Solid.BookOpen,
			outline: Outline.BookOpen,
		},
		new: false,
	},
	{
		name: "briefcase",
		tags: [],
		icons: {
			solid: Solid.Briefcase,
			outline: Outline.Briefcase,
		},
		new: false,
	},
	{
		name: "cake",
		tags: [],
		icons: {
			solid: Solid.Cake,
			outline: Outline.Cake,
		},
		new: true,
	},
	{
		name: "calculator",
		tags: [],
		icons: {
			solid: Solid.Calculator,
			outline: Outline.Calculator,
		},
		new: true,
	},
	{
		name: "calendar",
		tags: [],
		icons: {
			solid: Solid.Calendar,
			outline: Outline.Calendar,
		},
		new: false,
	},
	{
		name: "camera",
		tags: [],
		icons: {
			solid: Solid.Camera,
			outline: Outline.Camera,
		},
		new: false,
	},
	{
		name: "cash",
		tags: [],
		icons: {
			solid: Solid.Cash,
			outline: Outline.Cash,
		},
		new: false,
	},
	{
		name: "chart-bar",
		tags: [],
		icons: {
			solid: Solid.ChartBar,
			outline: Outline.ChartBar,
		},
		new: false,
	},
	{
		name: "chart-pie",
		tags: [],
		icons: {
			solid: Solid.ChartPie,
			outline: Outline.ChartPie,
		},
		new: false,
	},
	{
		name: "chart-square-bar",
		tags: [],
		icons: {
			solid: Solid.ChartSquareBar,
			outline: Outline.ChartSquareBar,
		},
		new: false,
	},
	{
		name: "chat",
		tags: [],
		icons: {
			solid: Solid.Chat,
			outline: Outline.Chat,
		},
		new: false,
	},
	{
		name: "chat-alt",
		tags: [],
		icons: {
			solid: Solid.ChatAlt,
			outline: Outline.ChatAlt,
		},
		new: false,
	},
	{
		name: "chat-alt2",
		tags: [],
		icons: {
			solid: Solid.ChatAlt2,
			outline: Outline.ChatAlt2,
		},
		new: false,
	},
	{
		name: "check",
		tags: [],
		icons: {
			solid: Solid.Check,
			outline: Outline.Check,
		},
		new: false,
	},
	{
		name: "check-circle",
		tags: [],
		icons: {
			solid: Solid.CheckCircle,
			outline: Outline.CheckCircle,
		},
		new: false,
	},
	{
		name: "chevron-double-down",
		tags: [],
		icons: {
			solid: Solid.ChevronDoubleDown,
			outline: Outline.ChevronDoubleDown,
		},
		new: true,
	},
	{
		name: "chevron-double-left",
		tags: [],
		icons: {
			solid: Solid.ChevronDoubleLeft,
			outline: Outline.ChevronDoubleLeft,
		},
		new: true,
	},
	{
		name: "chevron-double-right",
		tags: [],
		icons: {
			solid: Solid.ChevronDoubleRight,
			outline: Outline.ChevronDoubleRight,
		},
		new: true,
	},
	{
		name: "chevron-double-up",
		tags: [],
		icons: {
			solid: Solid.ChevronDoubleUp,
			outline: Outline.ChevronDoubleUp,
		},
		new: true,
	},
	{
		name: "chevron-down",
		tags: [],
		icons: {
			solid: Solid.ChevronDown,
			outline: Outline.ChevronDown,
		},
		new: false,
	},
	{
		name: "chevron-left",
		tags: [],
		icons: {
			solid: Solid.ChevronLeft,
			outline: Outline.ChevronLeft,
		},
		new: false,
	},
	{
		name: "chevron-right",
		tags: [],
		icons: {
			solid: Solid.ChevronRight,
			outline: Outline.ChevronRight,
		},
		new: false,
	},
	{
		name: "chevron-up",
		tags: [],
		icons: {
			solid: Solid.ChevronUp,
			outline: Outline.ChevronUp,
		},
		new: false,
	},
	{
		name: "chip",
		tags: [],
		icons: {
			solid: Solid.Chip,
			outline: Outline.Chip,
		},
		new: true,
	},
	{
		name: "clipboard",
		tags: [],
		icons: {
			solid: Solid.Clipboard,
			outline: Outline.Clipboard,
		},
		new: false,
	},
	{
		name: "clipboard-check",
		tags: [],
		icons: {
			solid: Solid.ClipboardCheck,
			outline: Outline.ClipboardCheck,
		},
		new: false,
	},
	{
		name: "clipboard-copy",
		tags: [],
		icons: {
			solid: Solid.ClipboardCopy,
			outline: Outline.ClipboardCopy,
		},
		new: false,
	},
	{
		name: "clipboard-list",
		tags: [],
		icons: {
			solid: Solid.ClipboardList,
			outline: Outline.ClipboardList,
		},
		new: false,
	},
	{
		name: "clock",
		tags: [],
		icons: {
			solid: Solid.Clock,
			outline: Outline.Clock,
		},
		new: false,
	},
	{
		name: "cloud",
		tags: [],
		icons: {
			solid: Solid.Cloud,
			outline: Outline.Cloud,
		},
		new: true,
	},
	{
		name: "cloud-download",
		tags: [],
		icons: {
			solid: Solid.CloudDownload,
			outline: Outline.CloudDownload,
		},
		new: true,
	},
	{
		name: "cloud-upload",
		tags: [],
		icons: {
			solid: Solid.CloudUpload,
			outline: Outline.CloudUpload,
		},
		new: true,
	},
	{
		name: "code",
		tags: [],
		icons: {
			solid: Solid.Code,
			outline: Outline.Code,
		},
		new: false,
	},
	{
		name: "cog",
		tags: [],
		icons: {
			solid: Solid.Cog,
			outline: Outline.Cog,
		},
		new: false,
	},
	{
		name: "collection",
		tags: [],
		icons: {
			solid: Solid.Collection,
			outline: Outline.Collection,
		},
		new: false,
	},
	{
		name: "color-swatch",
		tags: [],
		icons: {
			solid: Solid.ColorSwatch,
			outline: Outline.ColorSwatch,
		},
		new: false,
	},
	{
		name: "credit-card",
		tags: [],
		icons: {
			solid: Solid.CreditCard,
			outline: Outline.CreditCard,
		},
		new: false,
	},
	{
		name: "cube",
		tags: [],
		icons: {
			solid: Solid.Cube,
			outline: Outline.Cube,
		},
		new: true,
	},
	{
		name: "cube-transparent",
		tags: [],
		icons: {
			solid: Solid.CubeTransparent,
			outline: Outline.CubeTransparent,
		},
		new: true,
	},
	{
		name: "currency-bangladeshi",
		tags: [],
		icons: {
			solid: Solid.CurrencyBangladeshi,
			outline: Outline.CurrencyBangladeshi,
		},
		new: true,
	},
	{
		name: "currency-dollar",
		tags: [],
		icons: {
			solid: Solid.CurrencyDollar,
			outline: Outline.CurrencyDollar,
		},
		new: false,
	},
	{
		name: "currency-euro",
		tags: [],
		icons: {
			solid: Solid.CurrencyEuro,
			outline: Outline.CurrencyEuro,
		},
		new: false,
	},
	{
		name: "currency-pound",
		tags: [],
		icons: {
			solid: Solid.CurrencyPound,
			outline: Outline.CurrencyPound,
		},
		new: false,
	},
	{
		name: "currency-rupee",
		tags: [],
		icons: {
			solid: Solid.CurrencyRupee,
			outline: Outline.CurrencyRupee,
		},
		new: false,
	},
	{
		name: "currency-yen",
		tags: [],
		icons: {
			solid: Solid.CurrencyYen,
			outline: Outline.CurrencyYen,
		},
		new: false,
	},
	{
		name: "cursor-click",
		tags: [],
		icons: {
			solid: Solid.CursorClick,
			outline: Outline.CursorClick,
		},
		new: false,
	},
	{
		name: "database",
		tags: [],
		icons: {
			solid: Solid.Database,
			outline: Outline.Database,
		},
		new: true,
	},
	{
		name: "desktop-computer",
		tags: [],
		icons: {
			solid: Solid.DesktopComputer,
			outline: Outline.DesktopComputer,
		},
		new: false,
	},
	{
		name: "device-mobile",
		tags: [],
		icons: {
			solid: Solid.DeviceMobile,
			outline: Outline.DeviceMobile,
		},
		new: true,
	},
	{
		name: "device-tablet",
		tags: [],
		icons: {
			solid: Solid.DeviceTablet,
			outline: Outline.DeviceTablet,
		},
		new: true,
	},
	{
		name: "document",
		tags: [],
		icons: {
			solid: Solid.Document,
			outline: Outline.Document,
		},
		new: false,
	},
	{
		name: "document-add",
		tags: [],
		icons: {
			solid: Solid.DocumentAdd,
			outline: Outline.DocumentAdd,
		},
		new: false,
	},
	{
		name: "document-download",
		tags: [],
		icons: {
			solid: Solid.DocumentDownload,
			outline: Outline.DocumentDownload,
		},
		new: false,
	},
	{
		name: "document-duplicate",
		tags: [],
		icons: {
			solid: Solid.DocumentDuplicate,
			outline: Outline.DocumentDuplicate,
		},
		new: false,
	},
	{
		name: "document-remove",
		tags: [],
		icons: {
			solid: Solid.DocumentRemove,
			outline: Outline.DocumentRemove,
		},
		new: false,
	},
	{
		name: "document-report",
		tags: [],
		icons: {
			solid: Solid.DocumentReport,
			outline: Outline.DocumentReport,
		},
		new: false,
	},
	{
		name: "document-search",
		tags: [],
		icons: {
			solid: Solid.DocumentSearch,
			outline: Outline.DocumentSearch,
		},
		new: true,
	},
	{
		name: "document-text",
		tags: [],
		icons: {
			solid: Solid.DocumentText,
			outline: Outline.DocumentText,
		},
		new: true,
	},
	{
		name: "dots-circle-horizontal",
		tags: [],
		icons: {
			solid: Solid.DotsCircleHorizontal,
			outline: Outline.DotsCircleHorizontal,
		},
		new: false,
	},
	{
		name: "dots-horizontal",
		tags: [],
		icons: {
			solid: Solid.DotsHorizontal,
			outline: Outline.DotsHorizontal,
		},
		new: false,
	},
	{
		name: "dots-vertical",
		tags: [],
		icons: {
			solid: Solid.DotsVertical,
			outline: Outline.DotsVertical,
		},
		new: false,
	},
	{
		name: "download",
		tags: [],
		icons: {
			solid: Solid.Download,
			outline: Outline.Download,
		},
		new: false,
	},
	{
		name: "duplicate",
		tags: [],
		icons: {
			solid: Solid.Duplicate,
			outline: Outline.Duplicate,
		},
		new: false,
	},
	{
		name: "emoji-happy",
		tags: [],
		icons: {
			solid: Solid.EmojiHappy,
			outline: Outline.EmojiHappy,
		},
		new: false,
	},
	{
		name: "emoji-sad",
		tags: [],
		icons: {
			solid: Solid.EmojiSad,
			outline: Outline.EmojiSad,
		},
		new: false,
	},
	{
		name: "exclamation",
		tags: [],
		icons: {
			solid: Solid.Exclamation,
			outline: Outline.Exclamation,
		},
		new: false,
	},
	{
		name: "exclamation-circle",
		tags: [],
		icons: {
			solid: Solid.ExclamationCircle,
			outline: Outline.ExclamationCircle,
		},
		new: false,
	},
	{
		name: "external-link",
		tags: [],
		icons: {
			solid: Solid.ExternalLink,
			outline: Outline.ExternalLink,
		},
		new: false,
	},
	{
		name: "eye",
		tags: [],
		icons: {
			solid: Solid.Eye,
			outline: Outline.Eye,
		},
		new: false,
	},
	{
		name: "eye-off",
		tags: [],
		icons: {
			solid: Solid.EyeOff,
			outline: Outline.EyeOff,
		},
		new: false,
	},
	{
		name: "fast-forward",
		tags: [],
		icons: {
			solid: Solid.FastForward,
			outline: Outline.FastForward,
		},
		new: true,
	},
	{
		name: "film",
		tags: [],
		icons: {
			solid: Solid.Film,
			outline: Outline.Film,
		},
		new: true,
	},
	{
		name: "filter",
		tags: [],
		icons: {
			solid: Solid.Filter,
			outline: Outline.Filter,
		},
		new: false,
	},
	{
		name: "finger-print",
		tags: [],
		icons: {
			solid: Solid.FingerPrint,
			outline: Outline.FingerPrint,
		},
		new: true,
	},
	{
		name: "fire",
		tags: [],
		icons: {
			solid: Solid.Fire,
			outline: Outline.Fire,
		},
		new: false,
	},
	{
		name: "flag",
		tags: [],
		icons: {
			solid: Solid.Flag,
			outline: Outline.Flag,
		},
		new: false,
	},
	{
		name: "folder",
		tags: [],
		icons: {
			solid: Solid.Folder,
			outline: Outline.Folder,
		},
		new: false,
	},
	{
		name: "folder-add",
		tags: [],
		icons: {
			solid: Solid.FolderAdd,
			outline: Outline.FolderAdd,
		},
		new: false,
	},
	{
		name: "folder-download",
		tags: [],
		icons: {
			solid: Solid.FolderDownload,
			outline: Outline.FolderDownload,
		},
		new: false,
	},
	{
		name: "folder-open",
		tags: [],
		icons: {
			solid: Solid.FolderOpen,
			outline: Outline.FolderOpen,
		},
		new: true,
	},
	{
		name: "folder-remove",
		tags: [],
		icons: {
			solid: Solid.FolderRemove,
			outline: Outline.FolderRemove,
		},
		new: false,
	},
	{
		name: "gift",
		tags: [],
		icons: {
			solid: Solid.Gift,
			outline: Outline.Gift,
		},
		new: true,
	},
	{
		name: "globe",
		tags: [],
		icons: {
			solid: Solid.Globe,
			outline: Outline.Globe,
		},
		new: false,
	},
	{
		name: "globe-alt",
		tags: [],
		icons: {
			solid: Solid.GlobeAlt,
			outline: Outline.GlobeAlt,
		},
		new: false,
	},
	{
		name: "hand",
		tags: [],
		icons: {
			solid: Solid.Hand,
			outline: Outline.Hand,
		},
		new: false,
	},
	{
		name: "hashtag",
		tags: [],
		icons: {
			solid: Solid.Hashtag,
			outline: Outline.Hashtag,
		},
		new: false,
	},
	{
		name: "heart",
		tags: [],
		icons: {
			solid: Solid.Heart,
			outline: Outline.Heart,
		},
		new: false,
	},
	{
		name: "home",
		tags: [],
		icons: {
			solid: Solid.Home,
			outline: Outline.Home,
		},
		new: false,
	},
	{
		name: "identification",
		tags: [],
		icons: {
			solid: Solid.Identification,
			outline: Outline.Identification,
		},
		new: true,
	},
	{
		name: "inbox",
		tags: [],
		icons: {
			solid: Solid.Inbox,
			outline: Outline.Inbox,
		},
		new: false,
	},
	{
		name: "inbox-in",
		tags: [],
		icons: {
			solid: Solid.InboxIn,
			outline: Outline.InboxIn,
		},
		new: false,
	},
	{
		name: "information-circle",
		tags: [],
		icons: {
			solid: Solid.InformationCircle,
			outline: Outline.InformationCircle,
		},
		new: false,
	},
	{
		name: "key",
		tags: [],
		icons: {
			solid: Solid.Key,
			outline: Outline.Key,
		},
		new: false,
	},
	{
		name: "library",
		tags: [],
		icons: {
			solid: Solid.Library,
			outline: Outline.Library,
		},
		new: false,
	},
	{
		name: "light-bulb",
		tags: [],
		icons: {
			solid: Solid.LightBulb,
			outline: Outline.LightBulb,
		},
		new: false,
	},
	{
		name: "lightning-bolt",
		tags: [],
		icons: {
			solid: Solid.LightningBolt,
			outline: Outline.LightningBolt,
		},
		new: false,
	},
	{
		name: "link",
		tags: [],
		icons: {
			solid: Solid.Link,
			outline: Outline.Link,
		},
		new: false,
	},
	{
		name: "location-marker",
		tags: [],
		icons: {
			solid: Solid.LocationMarker,
			outline: Outline.LocationMarker,
		},
		new: false,
	},
	{
		name: "lock-closed",
		tags: [],
		icons: {
			solid: Solid.LockClosed,
			outline: Outline.LockClosed,
		},
		new: false,
	},
	{
		name: "lock-open",
		tags: [],
		icons: {
			solid: Solid.LockOpen,
			outline: Outline.LockOpen,
		},
		new: false,
	},
	{
		name: "login",
		tags: [],
		icons: {
			solid: Solid.Login,
			outline: Outline.Login,
		},
		new: true,
	},
	{
		name: "logout",
		tags: [],
		icons: {
			solid: Solid.Logout,
			outline: Outline.Logout,
		},
		new: true,
	},
	{
		name: "mail",
		tags: [],
		icons: {
			solid: Solid.Mail,
			outline: Outline.Mail,
		},
		new: false,
	},
	{
		name: "mail-open",
		tags: [],
		icons: {
			solid: Solid.MailOpen,
			outline: Outline.MailOpen,
		},
		new: false,
	},
	{
		name: "map",
		tags: [],
		icons: {
			solid: Solid.Map,
			outline: Outline.Map,
		},
		new: true,
	},
	{
		name: "menu",
		tags: [],
		icons: {
			solid: Solid.Menu,
			outline: Outline.Menu,
		},
		new: false,
	},
	{
		name: "menu-alt1",
		tags: [],
		icons: {
			solid: Solid.MenuAlt1,
			outline: Outline.MenuAlt1,
		},
		new: false,
	},
	{
		name: "menu-alt2",
		tags: [],
		icons: {
			solid: Solid.MenuAlt2,
			outline: Outline.MenuAlt2,
		},
		new: false,
	},
	{
		name: "menu-alt3",
		tags: [],
		icons: {
			solid: Solid.MenuAlt3,
			outline: Outline.MenuAlt3,
		},
		new: false,
	},
	{
		name: "menu-alt4",
		tags: [],
		icons: {
			solid: Solid.MenuAlt4,
			outline: Outline.MenuAlt4,
		},
		new: false,
	},
	{
		name: "microphone",
		tags: [],
		icons: {
			solid: Solid.Microphone,
			outline: Outline.Microphone,
		},
		new: false,
	},
	{
		name: "minus",
		tags: [],
		icons: {
			solid: Solid.Minus,
			outline: Outline.Minus,
		},
		new: true,
	},
	{
		name: "minus-circle",
		tags: [],
		icons: {
			solid: Solid.MinusCircle,
			outline: Outline.MinusCircle,
		},
		new: false,
	},
	{
		name: "moon",
		tags: [],
		icons: {
			solid: Solid.Moon,
			outline: Outline.Moon,
		},
		new: false,
	},
	{
		name: "music-note",
		tags: [],
		icons: {
			solid: Solid.MusicNote,
			outline: Outline.MusicNote,
		},
		new: true,
	},
	{
		name: "newspaper",
		tags: [],
		icons: {
			solid: Solid.Newspaper,
			outline: Outline.Newspaper,
		},
		new: false,
	},
	{
		name: "office-building",
		tags: [],
		icons: {
			solid: Solid.OfficeBuilding,
			outline: Outline.OfficeBuilding,
		},
		new: false,
	},
	{
		name: "paper-airplane",
		tags: [],
		icons: {
			solid: Solid.PaperAirplane,
			outline: Outline.PaperAirplane,
		},
		new: true,
	},
	{
		name: "paper-clip",
		tags: [],
		icons: {
			solid: Solid.PaperClip,
			outline: Outline.PaperClip,
		},
		new: false,
	},
	{
		name: "pause",
		tags: [],
		icons: {
			solid: Solid.Pause,
			outline: Outline.Pause,
		},
		new: false,
	},
	{
		name: "pencil",
		tags: [],
		icons: {
			solid: Solid.Pencil,
			outline: Outline.Pencil,
		},
		new: false,
	},
	{
		name: "pencil-alt",
		tags: [],
		icons: {
			solid: Solid.PencilAlt,
			outline: Outline.PencilAlt,
		},
		new: false,
	},
	{
		name: "phone",
		tags: [],
		icons: {
			solid: Solid.Phone,
			outline: Outline.Phone,
		},
		new: false,
	},
	{
		name: "phone-incoming",
		tags: [],
		icons: {
			solid: Solid.PhoneIncoming,
			outline: Outline.PhoneIncoming,
		},
		new: false,
	},
	{
		name: "phone-missed-call",
		tags: [],
		icons: {
			solid: Solid.PhoneMissedCall,
			outline: Outline.PhoneMissedCall,
		},
		new: true,
	},
	{
		name: "phone-outgoing",
		tags: [],
		icons: {
			solid: Solid.PhoneOutgoing,
			outline: Outline.PhoneOutgoing,
		},
		new: false,
	},
	{
		name: "photograph",
		tags: [],
		icons: {
			solid: Solid.Photograph,
			outline: Outline.Photograph,
		},
		new: false,
	},
	{
		name: "play",
		tags: [],
		icons: {
			solid: Solid.Play,
			outline: Outline.Play,
		},
		new: false,
	},
	{
		name: "plus",
		tags: [],
		icons: {
			solid: Solid.Plus,
			outline: Outline.Plus,
		},
		new: true,
	},
	{
		name: "plus-circle",
		tags: [],
		icons: {
			solid: Solid.PlusCircle,
			outline: Outline.PlusCircle,
		},
		new: false,
	},
	{
		name: "presentation-chart-bar",
		tags: [],
		icons: {
			solid: Solid.PresentationChartBar,
			outline: Outline.PresentationChartBar,
		},
		new: true,
	},
	{
		name: "presentation-chart-line",
		tags: [],
		icons: {
			solid: Solid.PresentationChartLine,
			outline: Outline.PresentationChartLine,
		},
		new: true,
	},
	{
		name: "printer",
		tags: [],
		icons: {
			solid: Solid.Printer,
			outline: Outline.Printer,
		},
		new: false,
	},
	{
		name: "puzzle",
		tags: [],
		icons: {
			solid: Solid.Puzzle,
			outline: Outline.Puzzle,
		},
		new: false,
	},
	{
		name: "qrcode",
		tags: [],
		icons: {
			solid: Solid.Qrcode,
			outline: Outline.Qrcode,
		},
		new: false,
	},
	{
		name: "question-mark-circle",
		tags: [],
		icons: {
			solid: Solid.QuestionMarkCircle,
			outline: Outline.QuestionMarkCircle,
		},
		new: false,
	},
	{
		name: "receipt-refund",
		tags: [],
		icons: {
			solid: Solid.ReceiptRefund,
			outline: Outline.ReceiptRefund,
		},
		new: false,
	},
	{
		name: "receipt-tax",
		tags: [],
		icons: {
			solid: Solid.ReceiptTax,
			outline: Outline.ReceiptTax,
		},
		new: true,
	},
	{
		name: "refresh",
		tags: [],
		icons: {
			solid: Solid.Refresh,
			outline: Outline.Refresh,
		},
		new: false,
	},
	{
		name: "reply",
		tags: [],
		icons: {
			solid: Solid.Reply,
			outline: Outline.Reply,
		},
		new: false,
	},
	{
		name: "rewind",
		tags: [],
		icons: {
			solid: Solid.Rewind,
			outline: Outline.Rewind,
		},
		new: true,
	},
	{
		name: "rss",
		tags: [],
		icons: {
			solid: Solid.Rss,
			outline: Outline.Rss,
		},
		new: true,
	},
	{
		name: "save",
		tags: [],
		icons: {
			solid: Solid.Save,
			outline: Outline.Save,
		},
		new: true,
	},
	{
		name: "save-as",
		tags: [],
		icons: {
			solid: Solid.SaveAs,
			outline: Outline.SaveAs,
		},
		new: true,
	},
	{
		name: "scale",
		tags: [],
		icons: {
			solid: Solid.Scale,
			outline: Outline.Scale,
		},
		new: false,
	},
	{
		name: "scissors",
		tags: [],
		icons: {
			solid: Solid.Scissors,
			outline: Outline.Scissors,
		},
		new: true,
	},
	{
		name: "search",
		tags: [],
		icons: {
			solid: Solid.Search,
			outline: Outline.Search,
		},
		new: false,
	},
	{
		name: "search-circle",
		tags: [],
		icons: {
			solid: Solid.SearchCircle,
			outline: Outline.SearchCircle,
		},
		new: true,
	},
	{
		name: "selector",
		tags: [],
		icons: {
			solid: Solid.Selector,
			outline: Outline.Selector,
		},
		new: false,
	},
	{
		name: "server",
		tags: [],
		icons: {
			solid: Solid.Server,
			outline: Outline.Server,
		},
		new: true,
	},
	{
		name: "share",
		tags: [],
		icons: {
			solid: Solid.Share,
			outline: Outline.Share,
		},
		new: false,
	},
	{
		name: "shield-check",
		tags: [],
		icons: {
			solid: Solid.ShieldCheck,
			outline: Outline.ShieldCheck,
		},
		new: false,
	},
	{
		name: "shield-exclamation",
		tags: [],
		icons: {
			solid: Solid.ShieldExclamation,
			outline: Outline.ShieldExclamation,
		},
		new: false,
	},
	{
		name: "shopping-bag",
		tags: [],
		icons: {
			solid: Solid.ShoppingBag,
			outline: Outline.ShoppingBag,
		},
		new: false,
	},
	{
		name: "shopping-cart",
		tags: [],
		icons: {
			solid: Solid.ShoppingCart,
			outline: Outline.ShoppingCart,
		},
		new: false,
	},
	{
		name: "sort-ascending",
		tags: [],
		icons: {
			solid: Solid.SortAscending,
			outline: Outline.SortAscending,
		},
		new: false,
	},
	{
		name: "sort-descending",
		tags: [],
		icons: {
			solid: Solid.SortDescending,
			outline: Outline.SortDescending,
		},
		new: false,
	},
	{
		name: "sparkles",
		tags: [],
		icons: {
			solid: Solid.Sparkles,
			outline: Outline.Sparkles,
		},
		new: false,
	},
	{
		name: "speakerphone",
		tags: [],
		icons: {
			solid: Solid.Speakerphone,
			outline: Outline.Speakerphone,
		},
		new: false,
	},
	{
		name: "star",
		tags: [],
		icons: {
			solid: Solid.Star,
			outline: Outline.Star,
		},
		new: false,
	},
	{
		name: "status-offline",
		tags: [],
		icons: {
			solid: Solid.StatusOffline,
			outline: Outline.StatusOffline,
		},
		new: true,
	},
	{
		name: "status-online",
		tags: [],
		icons: {
			solid: Solid.StatusOnline,
			outline: Outline.StatusOnline,
		},
		new: true,
	},
	{
		name: "stop",
		tags: [],
		icons: {
			solid: Solid.Stop,
			outline: Outline.Stop,
		},
		new: false,
	},
	{
		name: "sun",
		tags: [],
		icons: {
			solid: Solid.Sun,
			outline: Outline.Sun,
		},
		new: false,
	},
	{
		name: "support",
		tags: [],
		icons: {
			solid: Solid.Support,
			outline: Outline.Support,
		},
		new: false,
	},
	{
		name: "switch-horizontal",
		tags: [],
		icons: {
			solid: Solid.SwitchHorizontal,
			outline: Outline.SwitchHorizontal,
		},
		new: false,
	},
	{
		name: "switch-vertical",
		tags: [],
		icons: {
			solid: Solid.SwitchVertical,
			outline: Outline.SwitchVertical,
		},
		new: false,
	},
	{
		name: "table",
		tags: [],
		icons: {
			solid: Solid.Table,
			outline: Outline.Table,
		},
		new: true,
	},
	{
		name: "tag",
		tags: [],
		icons: {
			solid: Solid.Tag,
			outline: Outline.Tag,
		},
		new: false,
	},
	{
		name: "template",
		tags: [],
		icons: {
			solid: Solid.Template,
			outline: Outline.Template,
		},
		new: false,
	},
	{
		name: "terminal",
		tags: [],
		icons: {
			solid: Solid.Terminal,
			outline: Outline.Terminal,
		},
		new: false,
	},
	{
		name: "thumb-down",
		tags: [],
		icons: {
			solid: Solid.ThumbDown,
			outline: Outline.ThumbDown,
		},
		new: false,
	},
	{
		name: "thumb-up",
		tags: [],
		icons: {
			solid: Solid.ThumbUp,
			outline: Outline.ThumbUp,
		},
		new: false,
	},
	{
		name: "ticket",
		tags: [],
		icons: {
			solid: Solid.Ticket,
			outline: Outline.Ticket,
		},
		new: false,
	},
	{
		name: "translate",
		tags: [],
		icons: {
			solid: Solid.Translate,
			outline: Outline.Translate,
		},
		new: false,
	},
	{
		name: "trash",
		tags: [],
		icons: {
			solid: Solid.Trash,
			outline: Outline.Trash,
		},
		new: false,
	},
	{
		name: "trending-down",
		tags: [],
		icons: {
			solid: Solid.TrendingDown,
			outline: Outline.TrendingDown,
		},
		new: false,
	},
	{
		name: "trending-up",
		tags: [],
		icons: {
			solid: Solid.TrendingUp,
			outline: Outline.TrendingUp,
		},
		new: false,
	},
	{
		name: "truck",
		tags: [],
		icons: {
			solid: Solid.Truck,
			outline: Outline.Truck,
		},
		new: true,
	},
	{
		name: "upload",
		tags: [],
		icons: {
			solid: Solid.Upload,
			outline: Outline.Upload,
		},
		new: false,
	},
	{
		name: "user",
		tags: [],
		icons: {
			solid: Solid.User,
			outline: Outline.User,
		},
		new: false,
	},
	{
		name: "user-add",
		tags: [],
		icons: {
			solid: Solid.UserAdd,
			outline: Outline.UserAdd,
		},
		new: false,
	},
	{
		name: "user-circle",
		tags: [],
		icons: {
			solid: Solid.UserCircle,
			outline: Outline.UserCircle,
		},
		new: false,
	},
	{
		name: "user-group",
		tags: [],
		icons: {
			solid: Solid.UserGroup,
			outline: Outline.UserGroup,
		},
		new: false,
	},
	{
		name: "user-remove",
		tags: [],
		icons: {
			solid: Solid.UserRemove,
			outline: Outline.UserRemove,
		},
		new: false,
	},
	{
		name: "users",
		tags: [],
		icons: {
			solid: Solid.Users,
			outline: Outline.Users,
		},
		new: false,
	},
	{
		name: "variable",
		tags: [],
		icons: {
			solid: Solid.Variable,
			outline: Outline.Variable,
		},
		new: true,
	},
	{
		name: "video-camera",
		tags: [],
		icons: {
			solid: Solid.VideoCamera,
			outline: Outline.VideoCamera,
		},
		new: true,
	},
	{
		name: "view-boards",
		tags: [],
		icons: {
			solid: Solid.ViewBoards,
			outline: Outline.ViewBoards,
		},
		new: false,
	},
	{
		name: "view-grid",
		tags: [],
		icons: {
			solid: Solid.ViewGrid,
			outline: Outline.ViewGrid,
		},
		new: false,
	},
	{
		name: "view-grid-add",
		tags: [],
		icons: {
			solid: Solid.ViewGridAdd,
			outline: Outline.ViewGridAdd,
		},
		new: false,
	},
	{
		name: "view-list",
		tags: [],
		icons: {
			solid: Solid.ViewList,
			outline: Outline.ViewList,
		},
		new: false,
	},
	{
		name: "volume-off",
		tags: [],
		icons: {
			solid: Solid.VolumeOff,
			outline: Outline.VolumeOff,
		},
		new: false,
	},
	{
		name: "volume-up",
		tags: [],
		icons: {
			solid: Solid.VolumeUp,
			outline: Outline.VolumeUp,
		},
		new: false,
	},
	{
		name: "wifi",
		tags: [],
		icons: {
			solid: Solid.Wifi,
			outline: Outline.Wifi,
		},
		new: true,
	},
	{
		name: "x",
		tags: [],
		icons: {
			solid: Solid.X,
			outline: Outline.X,
		},
		new: false,
	},
	{
		name: "x-circle",
		tags: [],
		icons: {
			solid: Solid.XCircle,
			outline: Outline.XCircle,
		},
		new: false,
	},
	{
		name: "zoom-in",
		tags: [],
		icons: {
			solid: Solid.ZoomIn,
			outline: Outline.ZoomIn,
		},
		new: false,
	},
	{
		name: "zoom-out",
		tags: [],
		icons: {
			solid: Solid.ZoomOut,
			outline: Outline.ZoomOut,
		},
		new: false,
	},
]

// Generates tags based on a hyphenated name.
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoom", "out"]
//
function autoTags(originalName) {
	const tags = originalName.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [originalName, ...tags]
}

;(() => {
	for (const each of dataset) {
		const auto = autoTags(each.name)
		const alt = tags[each.name]
		const altAuto = []
		if (alt !== undefined) {
			altAuto.push(...alt.map(each => autoTags(each)))
		}
		const deduped = [...new Set([...auto, ...altAuto])]
		each.tags.push(...deduped)
	}
})()

export default dataset
