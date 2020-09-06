import * as Outline from "heroicons-0.4.1/outline"
import * as Solid from "heroicons-0.4.1/solid"
import tags from "data/tags"

const dataset = [
	{
		name: "academic-cap",
		tags: [],
		svgs: {
			solid: Solid.AcademicCap,
			outline: Outline.AcademicCap,
		},
		new: true,
	},
	{
		name: "adjustments",
		tags: [],
		svgs: {
			solid: Solid.Adjustments,
			outline: Outline.Adjustments,
		},
		new: false,
	},
	{
		name: "annotation",
		tags: [],
		svgs: {
			solid: Solid.Annotation,
			outline: Outline.Annotation,
		},
		new: false,
	},
	{
		name: "archive",
		tags: [],
		svgs: {
			solid: Solid.Archive,
			outline: Outline.Archive,
		},
		new: false,
	},
	{
		name: "arrow-circle-down",
		tags: [],
		svgs: {
			solid: Solid.ArrowCircleDown,
			outline: Outline.ArrowCircleDown,
		},
		new: false,
	},
	{
		name: "arrow-circle-left",
		tags: [],
		svgs: {
			solid: Solid.ArrowCircleLeft,
			outline: Outline.ArrowCircleLeft,
		},
		new: false,
	},
	{
		name: "arrow-circle-right",
		tags: [],
		svgs: {
			solid: Solid.ArrowCircleRight,
			outline: Outline.ArrowCircleRight,
		},
		new: false,
	},
	{
		name: "arrow-circle-up",
		tags: [],
		svgs: {
			solid: Solid.ArrowCircleUp,
			outline: Outline.ArrowCircleUp,
		},
		new: false,
	},
	{
		name: "arrow-down",
		tags: [],
		svgs: {
			solid: Solid.ArrowDown,
			outline: Outline.ArrowDown,
		},
		new: false,
	},
	{
		name: "arrow-left",
		tags: [],
		svgs: {
			solid: Solid.ArrowLeft,
			outline: Outline.ArrowLeft,
		},
		new: false,
	},
	{
		name: "arrow-narrow-down",
		tags: [],
		svgs: {
			solid: Solid.ArrowNarrowDown,
			outline: Outline.ArrowNarrowDown,
		},
		new: false,
	},
	{
		name: "arrow-narrow-left",
		tags: [],
		svgs: {
			solid: Solid.ArrowNarrowLeft,
			outline: Outline.ArrowNarrowLeft,
		},
		new: false,
	},
	{
		name: "arrow-narrow-right",
		tags: [],
		svgs: {
			solid: Solid.ArrowNarrowRight,
			outline: Outline.ArrowNarrowRight,
		},
		new: false,
	},
	{
		name: "arrow-narrow-up",
		tags: [],
		svgs: {
			solid: Solid.ArrowNarrowUp,
			outline: Outline.ArrowNarrowUp,
		},
		new: false,
	},
	{
		name: "arrow-right",
		tags: [],
		svgs: {
			solid: Solid.ArrowRight,
			outline: Outline.ArrowRight,
		},
		new: false,
	},
	{
		name: "arrows-expand",
		tags: [],
		svgs: {
			solid: Solid.ArrowsExpand,
			outline: Outline.ArrowsExpand,
		},
		new: false,
	},
	{
		name: "arrow-up",
		tags: [],
		svgs: {
			solid: Solid.ArrowUp,
			outline: Outline.ArrowUp,
		},
		new: false,
	},
	{
		name: "at-symbol",
		tags: [],
		svgs: {
			solid: Solid.AtSymbol,
			outline: Outline.AtSymbol,
		},
		new: false,
	},
	{
		name: "backspace",
		tags: [],
		svgs: {
			solid: Solid.Backspace,
			outline: Outline.Backspace,
		},
		new: true,
	},
	{
		name: "badge-check",
		tags: [],
		svgs: {
			solid: Solid.BadgeCheck,
			outline: Outline.BadgeCheck,
		},
		new: false,
	},
	{
		name: "ban",
		tags: [],
		svgs: {
			solid: Solid.Ban,
			outline: Outline.Ban,
		},
		new: false,
	},
	{
		name: "beaker",
		tags: [],
		svgs: {
			solid: Solid.Beaker,
			outline: Outline.Beaker,
		},
		new: true,
	},
	{
		name: "bell",
		tags: [],
		svgs: {
			solid: Solid.Bell,
			outline: Outline.Bell,
		},
		new: false,
	},
	{
		name: "bookmark",
		tags: [],
		svgs: {
			solid: Solid.Bookmark,
			outline: Outline.Bookmark,
		},
		new: false,
	},
	{
		name: "bookmark-alt",
		tags: [],
		svgs: {
			solid: Solid.BookmarkAlt,
			outline: Outline.BookmarkAlt,
		},
		new: false,
	},
	{
		name: "book-open",
		tags: [],
		svgs: {
			solid: Solid.BookOpen,
			outline: Outline.BookOpen,
		},
		new: false,
	},
	{
		name: "briefcase",
		tags: [],
		svgs: {
			solid: Solid.Briefcase,
			outline: Outline.Briefcase,
		},
		new: false,
	},
	{
		name: "cake",
		tags: [],
		svgs: {
			solid: Solid.Cake,
			outline: Outline.Cake,
		},
		new: true,
	},
	{
		name: "calculator",
		tags: [],
		svgs: {
			solid: Solid.Calculator,
			outline: Outline.Calculator,
		},
		new: true,
	},
	{
		name: "calendar",
		tags: [],
		svgs: {
			solid: Solid.Calendar,
			outline: Outline.Calendar,
		},
		new: false,
	},
	{
		name: "camera",
		tags: [],
		svgs: {
			solid: Solid.Camera,
			outline: Outline.Camera,
		},
		new: false,
	},
	{
		name: "cash",
		tags: [],
		svgs: {
			solid: Solid.Cash,
			outline: Outline.Cash,
		},
		new: false,
	},
	{
		name: "chart-bar",
		tags: [],
		svgs: {
			solid: Solid.ChartBar,
			outline: Outline.ChartBar,
		},
		new: false,
	},
	{
		name: "chart-pie",
		tags: [],
		svgs: {
			solid: Solid.ChartPie,
			outline: Outline.ChartPie,
		},
		new: false,
	},
	{
		name: "chart-square-bar",
		tags: [],
		svgs: {
			solid: Solid.ChartSquareBar,
			outline: Outline.ChartSquareBar,
		},
		new: false,
	},
	{
		name: "chat",
		tags: [],
		svgs: {
			solid: Solid.Chat,
			outline: Outline.Chat,
		},
		new: false,
	},
	{
		name: "chat-alt",
		tags: [],
		svgs: {
			solid: Solid.ChatAlt,
			outline: Outline.ChatAlt,
		},
		new: false,
	},
	{
		name: "chat-alt2",
		tags: [],
		svgs: {
			solid: Solid.ChatAlt2,
			outline: Outline.ChatAlt2,
		},
		new: false,
	},
	{
		name: "check",
		tags: [],
		svgs: {
			solid: Solid.Check,
			outline: Outline.Check,
		},
		new: false,
	},
	{
		name: "check-circle",
		tags: [],
		svgs: {
			solid: Solid.CheckCircle,
			outline: Outline.CheckCircle,
		},
		new: false,
	},
	{
		name: "chevron-double-down",
		tags: [],
		svgs: {
			solid: Solid.ChevronDoubleDown,
			outline: Outline.ChevronDoubleDown,
		},
		new: true,
	},
	{
		name: "chevron-double-left",
		tags: [],
		svgs: {
			solid: Solid.ChevronDoubleLeft,
			outline: Outline.ChevronDoubleLeft,
		},
		new: true,
	},
	{
		name: "chevron-double-right",
		tags: [],
		svgs: {
			solid: Solid.ChevronDoubleRight,
			outline: Outline.ChevronDoubleRight,
		},
		new: true,
	},
	{
		name: "chevron-double-up",
		tags: [],
		svgs: {
			solid: Solid.ChevronDoubleUp,
			outline: Outline.ChevronDoubleUp,
		},
		new: true,
	},
	{
		name: "chevron-down",
		tags: [],
		svgs: {
			solid: Solid.ChevronDown,
			outline: Outline.ChevronDown,
		},
		new: false,
	},
	{
		name: "chevron-left",
		tags: [],
		svgs: {
			solid: Solid.ChevronLeft,
			outline: Outline.ChevronLeft,
		},
		new: false,
	},
	{
		name: "chevron-right",
		tags: [],
		svgs: {
			solid: Solid.ChevronRight,
			outline: Outline.ChevronRight,
		},
		new: false,
	},
	{
		name: "chevron-up",
		tags: [],
		svgs: {
			solid: Solid.ChevronUp,
			outline: Outline.ChevronUp,
		},
		new: false,
	},
	{
		name: "chip",
		tags: [],
		svgs: {
			solid: Solid.Chip,
			outline: Outline.Chip,
		},
		new: true,
	},
	{
		name: "clipboard",
		tags: [],
		svgs: {
			solid: Solid.Clipboard,
			outline: Outline.Clipboard,
		},
		new: false,
	},
	{
		name: "clipboard-check",
		tags: [],
		svgs: {
			solid: Solid.ClipboardCheck,
			outline: Outline.ClipboardCheck,
		},
		new: false,
	},
	{
		name: "clipboard-copy",
		tags: [],
		svgs: {
			solid: Solid.ClipboardCopy,
			outline: Outline.ClipboardCopy,
		},
		new: false,
	},
	{
		name: "clipboard-list",
		tags: [],
		svgs: {
			solid: Solid.ClipboardList,
			outline: Outline.ClipboardList,
		},
		new: false,
	},
	{
		name: "clock",
		tags: [],
		svgs: {
			solid: Solid.Clock,
			outline: Outline.Clock,
		},
		new: false,
	},
	{
		name: "cloud",
		tags: [],
		svgs: {
			solid: Solid.Cloud,
			outline: Outline.Cloud,
		},
		new: true,
	},
	{
		name: "cloud-download",
		tags: [],
		svgs: {
			solid: Solid.CloudDownload,
			outline: Outline.CloudDownload,
		},
		new: true,
	},
	{
		name: "cloud-upload",
		tags: [],
		svgs: {
			solid: Solid.CloudUpload,
			outline: Outline.CloudUpload,
		},
		new: true,
	},
	{
		name: "code",
		tags: [],
		svgs: {
			solid: Solid.Code,
			outline: Outline.Code,
		},
		new: false,
	},
	{
		name: "cog",
		tags: [],
		svgs: {
			solid: Solid.Cog,
			outline: Outline.Cog,
		},
		new: false,
	},
	{
		name: "collection",
		tags: [],
		svgs: {
			solid: Solid.Collection,
			outline: Outline.Collection,
		},
		new: false,
	},
	{
		name: "color-swatch",
		tags: [],
		svgs: {
			solid: Solid.ColorSwatch,
			outline: Outline.ColorSwatch,
		},
		new: false,
	},
	{
		name: "credit-card",
		tags: [],
		svgs: {
			solid: Solid.CreditCard,
			outline: Outline.CreditCard,
		},
		new: false,
	},
	{
		name: "cube",
		tags: [],
		svgs: {
			solid: Solid.Cube,
			outline: Outline.Cube,
		},
		new: true,
	},
	{
		name: "cube-transparent",
		tags: [],
		svgs: {
			solid: Solid.CubeTransparent,
			outline: Outline.CubeTransparent,
		},
		new: true,
	},
	{
		name: "currency-bangladeshi",
		tags: [],
		svgs: {
			solid: Solid.CurrencyBangladeshi,
			outline: Outline.CurrencyBangladeshi,
		},
		new: true,
	},
	{
		name: "currency-dollar",
		tags: [],
		svgs: {
			solid: Solid.CurrencyDollar,
			outline: Outline.CurrencyDollar,
		},
		new: false,
	},
	{
		name: "currency-euro",
		tags: [],
		svgs: {
			solid: Solid.CurrencyEuro,
			outline: Outline.CurrencyEuro,
		},
		new: false,
	},
	{
		name: "currency-pound",
		tags: [],
		svgs: {
			solid: Solid.CurrencyPound,
			outline: Outline.CurrencyPound,
		},
		new: false,
	},
	{
		name: "currency-rupee",
		tags: [],
		svgs: {
			solid: Solid.CurrencyRupee,
			outline: Outline.CurrencyRupee,
		},
		new: false,
	},
	{
		name: "currency-yen",
		tags: [],
		svgs: {
			solid: Solid.CurrencyYen,
			outline: Outline.CurrencyYen,
		},
		new: false,
	},
	{
		name: "cursor-click",
		tags: [],
		svgs: {
			solid: Solid.CursorClick,
			outline: Outline.CursorClick,
		},
		new: false,
	},
	{
		name: "database",
		tags: [],
		svgs: {
			solid: Solid.Database,
			outline: Outline.Database,
		},
		new: true,
	},
	{
		name: "desktop-computer",
		tags: [],
		svgs: {
			solid: Solid.DesktopComputer,
			outline: Outline.DesktopComputer,
		},
		new: false,
	},
	{
		name: "device-mobile",
		tags: [],
		svgs: {
			solid: Solid.DeviceMobile,
			outline: Outline.DeviceMobile,
		},
		new: true,
	},
	{
		name: "device-tablet",
		tags: [],
		svgs: {
			solid: Solid.DeviceTablet,
			outline: Outline.DeviceTablet,
		},
		new: true,
	},
	{
		name: "document",
		tags: [],
		svgs: {
			solid: Solid.Document,
			outline: Outline.Document,
		},
		new: false,
	},
	{
		name: "document-add",
		tags: [],
		svgs: {
			solid: Solid.DocumentAdd,
			outline: Outline.DocumentAdd,
		},
		new: false,
	},
	{
		name: "document-download",
		tags: [],
		svgs: {
			solid: Solid.DocumentDownload,
			outline: Outline.DocumentDownload,
		},
		new: false,
	},
	{
		name: "document-duplicate",
		tags: [],
		svgs: {
			solid: Solid.DocumentDuplicate,
			outline: Outline.DocumentDuplicate,
		},
		new: false,
	},
	{
		name: "document-remove",
		tags: [],
		svgs: {
			solid: Solid.DocumentRemove,
			outline: Outline.DocumentRemove,
		},
		new: false,
	},
	{
		name: "document-report",
		tags: [],
		svgs: {
			solid: Solid.DocumentReport,
			outline: Outline.DocumentReport,
		},
		new: false,
	},
	{
		name: "document-search",
		tags: [],
		svgs: {
			solid: Solid.DocumentSearch,
			outline: Outline.DocumentSearch,
		},
		new: true,
	},
	{
		name: "document-text",
		tags: [],
		svgs: {
			solid: Solid.DocumentText,
			outline: Outline.DocumentText,
		},
		new: true,
	},
	{
		name: "dots-circle-horizontal",
		tags: [],
		svgs: {
			solid: Solid.DotsCircleHorizontal,
			outline: Outline.DotsCircleHorizontal,
		},
		new: false,
	},
	{
		name: "dots-horizontal",
		tags: [],
		svgs: {
			solid: Solid.DotsHorizontal,
			outline: Outline.DotsHorizontal,
		},
		new: false,
	},
	{
		name: "dots-vertical",
		tags: [],
		svgs: {
			solid: Solid.DotsVertical,
			outline: Outline.DotsVertical,
		},
		new: false,
	},
	{
		name: "download",
		tags: [],
		svgs: {
			solid: Solid.Download,
			outline: Outline.Download,
		},
		new: false,
	},
	{
		name: "duplicate",
		tags: [],
		svgs: {
			solid: Solid.Duplicate,
			outline: Outline.Duplicate,
		},
		new: false,
	},
	{
		name: "emoji-happy",
		tags: [],
		svgs: {
			solid: Solid.EmojiHappy,
			outline: Outline.EmojiHappy,
		},
		new: false,
	},
	{
		name: "emoji-sad",
		tags: [],
		svgs: {
			solid: Solid.EmojiSad,
			outline: Outline.EmojiSad,
		},
		new: false,
	},
	{
		name: "exclamation",
		tags: [],
		svgs: {
			solid: Solid.Exclamation,
			outline: Outline.Exclamation,
		},
		new: false,
	},
	{
		name: "exclamation-circle",
		tags: [],
		svgs: {
			solid: Solid.ExclamationCircle,
			outline: Outline.ExclamationCircle,
		},
		new: false,
	},
	{
		name: "external-link",
		tags: [],
		svgs: {
			solid: Solid.ExternalLink,
			outline: Outline.ExternalLink,
		},
		new: false,
	},
	{
		name: "eye",
		tags: [],
		svgs: {
			solid: Solid.Eye,
			outline: Outline.Eye,
		},
		new: false,
	},
	{
		name: "eye-off",
		tags: [],
		svgs: {
			solid: Solid.EyeOff,
			outline: Outline.EyeOff,
		},
		new: false,
	},
	{
		name: "fast-forward",
		tags: [],
		svgs: {
			solid: Solid.FastForward,
			outline: Outline.FastForward,
		},
		new: true,
	},
	{
		name: "film",
		tags: [],
		svgs: {
			solid: Solid.Film,
			outline: Outline.Film,
		},
		new: true,
	},
	{
		name: "filter",
		tags: [],
		svgs: {
			solid: Solid.Filter,
			outline: Outline.Filter,
		},
		new: false,
	},
	{
		name: "finger-print",
		tags: [],
		svgs: {
			solid: Solid.FingerPrint,
			outline: Outline.FingerPrint,
		},
		new: true,
	},
	{
		name: "fire",
		tags: [],
		svgs: {
			solid: Solid.Fire,
			outline: Outline.Fire,
		},
		new: false,
	},
	{
		name: "flag",
		tags: [],
		svgs: {
			solid: Solid.Flag,
			outline: Outline.Flag,
		},
		new: false,
	},
	{
		name: "folder",
		tags: [],
		svgs: {
			solid: Solid.Folder,
			outline: Outline.Folder,
		},
		new: false,
	},
	{
		name: "folder-add",
		tags: [],
		svgs: {
			solid: Solid.FolderAdd,
			outline: Outline.FolderAdd,
		},
		new: false,
	},
	{
		name: "folder-download",
		tags: [],
		svgs: {
			solid: Solid.FolderDownload,
			outline: Outline.FolderDownload,
		},
		new: false,
	},
	{
		name: "folder-open",
		tags: [],
		svgs: {
			solid: Solid.FolderOpen,
			outline: Outline.FolderOpen,
		},
		new: true,
	},
	{
		name: "folder-remove",
		tags: [],
		svgs: {
			solid: Solid.FolderRemove,
			outline: Outline.FolderRemove,
		},
		new: false,
	},
	{
		name: "gift",
		tags: [],
		svgs: {
			solid: Solid.Gift,
			outline: Outline.Gift,
		},
		new: true,
	},
	{
		name: "globe",
		tags: [],
		svgs: {
			solid: Solid.Globe,
			outline: Outline.Globe,
		},
		new: false,
	},
	{
		name: "globe-alt",
		tags: [],
		svgs: {
			solid: Solid.GlobeAlt,
			outline: Outline.GlobeAlt,
		},
		new: false,
	},
	{
		name: "hand",
		tags: [],
		svgs: {
			solid: Solid.Hand,
			outline: Outline.Hand,
		},
		new: false,
	},
	{
		name: "hashtag",
		tags: [],
		svgs: {
			solid: Solid.Hashtag,
			outline: Outline.Hashtag,
		},
		new: false,
	},
	{
		name: "heart",
		tags: [],
		svgs: {
			solid: Solid.Heart,
			outline: Outline.Heart,
		},
		new: false,
	},
	{
		name: "home",
		tags: [],
		svgs: {
			solid: Solid.Home,
			outline: Outline.Home,
		},
		new: false,
	},
	{
		name: "identification",
		tags: [],
		svgs: {
			solid: Solid.Identification,
			outline: Outline.Identification,
		},
		new: true,
	},
	{
		name: "inbox",
		tags: [],
		svgs: {
			solid: Solid.Inbox,
			outline: Outline.Inbox,
		},
		new: false,
	},
	{
		name: "inbox-in",
		tags: [],
		svgs: {
			solid: Solid.InboxIn,
			outline: Outline.InboxIn,
		},
		new: false,
	},
	{
		name: "information-circle",
		tags: [],
		svgs: {
			solid: Solid.InformationCircle,
			outline: Outline.InformationCircle,
		},
		new: false,
	},
	{
		name: "key",
		tags: [],
		svgs: {
			solid: Solid.Key,
			outline: Outline.Key,
		},
		new: false,
	},
	{
		name: "library",
		tags: [],
		svgs: {
			solid: Solid.Library,
			outline: Outline.Library,
		},
		new: false,
	},
	{
		name: "light-bulb",
		tags: [],
		svgs: {
			solid: Solid.LightBulb,
			outline: Outline.LightBulb,
		},
		new: false,
	},
	{
		name: "lightning-bolt",
		tags: [],
		svgs: {
			solid: Solid.LightningBolt,
			outline: Outline.LightningBolt,
		},
		new: false,
	},
	{
		name: "link",
		tags: [],
		svgs: {
			solid: Solid.Link,
			outline: Outline.Link,
		},
		new: false,
	},
	{
		name: "location-marker",
		tags: [],
		svgs: {
			solid: Solid.LocationMarker,
			outline: Outline.LocationMarker,
		},
		new: false,
	},
	{
		name: "lock-closed",
		tags: [],
		svgs: {
			solid: Solid.LockClosed,
			outline: Outline.LockClosed,
		},
		new: false,
	},
	{
		name: "lock-open",
		tags: [],
		svgs: {
			solid: Solid.LockOpen,
			outline: Outline.LockOpen,
		},
		new: false,
	},
	{
		name: "login",
		tags: [],
		svgs: {
			solid: Solid.Login,
			outline: Outline.Login,
		},
		new: true,
	},
	{
		name: "logout",
		tags: [],
		svgs: {
			solid: Solid.Logout,
			outline: Outline.Logout,
		},
		new: true,
	},
	{
		name: "mail",
		tags: [],
		svgs: {
			solid: Solid.Mail,
			outline: Outline.Mail,
		},
		new: false,
	},
	{
		name: "mail-open",
		tags: [],
		svgs: {
			solid: Solid.MailOpen,
			outline: Outline.MailOpen,
		},
		new: false,
	},
	{
		name: "map",
		tags: [],
		svgs: {
			solid: Solid.Map,
			outline: Outline.Map,
		},
		new: true,
	},
	{
		name: "menu",
		tags: [],
		svgs: {
			solid: Solid.Menu,
			outline: Outline.Menu,
		},
		new: false,
	},
	{
		name: "menu-alt1",
		tags: [],
		svgs: {
			solid: Solid.MenuAlt1,
			outline: Outline.MenuAlt1,
		},
		new: false,
	},
	{
		name: "menu-alt2",
		tags: [],
		svgs: {
			solid: Solid.MenuAlt2,
			outline: Outline.MenuAlt2,
		},
		new: false,
	},
	{
		name: "menu-alt3",
		tags: [],
		svgs: {
			solid: Solid.MenuAlt3,
			outline: Outline.MenuAlt3,
		},
		new: false,
	},
	{
		name: "menu-alt4",
		tags: [],
		svgs: {
			solid: Solid.MenuAlt4,
			outline: Outline.MenuAlt4,
		},
		new: false,
	},
	{
		name: "microphone",
		tags: [],
		svgs: {
			solid: Solid.Microphone,
			outline: Outline.Microphone,
		},
		new: false,
	},
	{
		name: "minus",
		tags: [],
		svgs: {
			solid: Solid.Minus,
			outline: Outline.Minus,
		},
		new: true,
	},
	{
		name: "minus-circle",
		tags: [],
		svgs: {
			solid: Solid.MinusCircle,
			outline: Outline.MinusCircle,
		},
		new: false,
	},
	{
		name: "moon",
		tags: [],
		svgs: {
			solid: Solid.Moon,
			outline: Outline.Moon,
		},
		new: false,
	},
	{
		name: "music-note",
		tags: [],
		svgs: {
			solid: Solid.MusicNote,
			outline: Outline.MusicNote,
		},
		new: true,
	},
	{
		name: "newspaper",
		tags: [],
		svgs: {
			solid: Solid.Newspaper,
			outline: Outline.Newspaper,
		},
		new: false,
	},
	{
		name: "office-building",
		tags: [],
		svgs: {
			solid: Solid.OfficeBuilding,
			outline: Outline.OfficeBuilding,
		},
		new: false,
	},
	{
		name: "paper-airplane",
		tags: [],
		svgs: {
			solid: Solid.PaperAirplane,
			outline: Outline.PaperAirplane,
		},
		new: true,
	},
	{
		name: "paper-clip",
		tags: [],
		svgs: {
			solid: Solid.PaperClip,
			outline: Outline.PaperClip,
		},
		new: false,
	},
	{
		name: "pause",
		tags: [],
		svgs: {
			solid: Solid.Pause,
			outline: Outline.Pause,
		},
		new: false,
	},
	{
		name: "pencil",
		tags: [],
		svgs: {
			solid: Solid.Pencil,
			outline: Outline.Pencil,
		},
		new: false,
	},
	{
		name: "pencil-alt",
		tags: [],
		svgs: {
			solid: Solid.PencilAlt,
			outline: Outline.PencilAlt,
		},
		new: false,
	},
	{
		name: "phone",
		tags: [],
		svgs: {
			solid: Solid.Phone,
			outline: Outline.Phone,
		},
		new: false,
	},
	{
		name: "phone-incoming",
		tags: [],
		svgs: {
			solid: Solid.PhoneIncoming,
			outline: Outline.PhoneIncoming,
		},
		new: false,
	},
	{
		name: "phone-missed-call",
		tags: [],
		svgs: {
			solid: Solid.PhoneMissedCall,
			outline: Outline.PhoneMissedCall,
		},
		new: true,
	},
	{
		name: "phone-outgoing",
		tags: [],
		svgs: {
			solid: Solid.PhoneOutgoing,
			outline: Outline.PhoneOutgoing,
		},
		new: false,
	},
	{
		name: "photograph",
		tags: [],
		svgs: {
			solid: Solid.Photograph,
			outline: Outline.Photograph,
		},
		new: false,
	},
	{
		name: "play",
		tags: [],
		svgs: {
			solid: Solid.Play,
			outline: Outline.Play,
		},
		new: false,
	},
	{
		name: "plus",
		tags: [],
		svgs: {
			solid: Solid.Plus,
			outline: Outline.Plus,
		},
		new: true,
	},
	{
		name: "plus-circle",
		tags: [],
		svgs: {
			solid: Solid.PlusCircle,
			outline: Outline.PlusCircle,
		},
		new: false,
	},
	{
		name: "presentation-chart-bar",
		tags: [],
		svgs: {
			solid: Solid.PresentationChartBar,
			outline: Outline.PresentationChartBar,
		},
		new: true,
	},
	{
		name: "presentation-chart-line",
		tags: [],
		svgs: {
			solid: Solid.PresentationChartLine,
			outline: Outline.PresentationChartLine,
		},
		new: true,
	},
	{
		name: "printer",
		tags: [],
		svgs: {
			solid: Solid.Printer,
			outline: Outline.Printer,
		},
		new: false,
	},
	{
		name: "puzzle",
		tags: [],
		svgs: {
			solid: Solid.Puzzle,
			outline: Outline.Puzzle,
		},
		new: false,
	},
	{
		name: "qrcode",
		tags: [],
		svgs: {
			solid: Solid.Qrcode,
			outline: Outline.Qrcode,
		},
		new: false,
	},
	{
		name: "question-mark-circle",
		tags: [],
		svgs: {
			solid: Solid.QuestionMarkCircle,
			outline: Outline.QuestionMarkCircle,
		},
		new: false,
	},
	{
		name: "receipt-refund",
		tags: [],
		svgs: {
			solid: Solid.ReceiptRefund,
			outline: Outline.ReceiptRefund,
		},
		new: false,
	},
	{
		name: "receipt-tax",
		tags: [],
		svgs: {
			solid: Solid.ReceiptTax,
			outline: Outline.ReceiptTax,
		},
		new: true,
	},
	{
		name: "refresh",
		tags: [],
		svgs: {
			solid: Solid.Refresh,
			outline: Outline.Refresh,
		},
		new: false,
	},
	{
		name: "reply",
		tags: [],
		svgs: {
			solid: Solid.Reply,
			outline: Outline.Reply,
		},
		new: false,
	},
	{
		name: "rewind",
		tags: [],
		svgs: {
			solid: Solid.Rewind,
			outline: Outline.Rewind,
		},
		new: true,
	},
	{
		name: "rss",
		tags: [],
		svgs: {
			solid: Solid.Rss,
			outline: Outline.Rss,
		},
		new: true,
	},
	{
		name: "save",
		tags: [],
		svgs: {
			solid: Solid.Save,
			outline: Outline.Save,
		},
		new: true,
	},
	{
		name: "save-as",
		tags: [],
		svgs: {
			solid: Solid.SaveAs,
			outline: Outline.SaveAs,
		},
		new: true,
	},
	{
		name: "scale",
		tags: [],
		svgs: {
			solid: Solid.Scale,
			outline: Outline.Scale,
		},
		new: false,
	},
	{
		name: "scissors",
		tags: [],
		svgs: {
			solid: Solid.Scissors,
			outline: Outline.Scissors,
		},
		new: true,
	},
	{
		name: "search",
		tags: [],
		svgs: {
			solid: Solid.Search,
			outline: Outline.Search,
		},
		new: false,
	},
	{
		name: "search-circle",
		tags: [],
		svgs: {
			solid: Solid.SearchCircle,
			outline: Outline.SearchCircle,
		},
		new: true,
	},
	{
		name: "selector",
		tags: [],
		svgs: {
			solid: Solid.Selector,
			outline: Outline.Selector,
		},
		new: false,
	},
	{
		name: "server",
		tags: [],
		svgs: {
			solid: Solid.Server,
			outline: Outline.Server,
		},
		new: true,
	},
	{
		name: "share",
		tags: [],
		svgs: {
			solid: Solid.Share,
			outline: Outline.Share,
		},
		new: false,
	},
	{
		name: "shield-check",
		tags: [],
		svgs: {
			solid: Solid.ShieldCheck,
			outline: Outline.ShieldCheck,
		},
		new: false,
	},
	{
		name: "shield-exclamation",
		tags: [],
		svgs: {
			solid: Solid.ShieldExclamation,
			outline: Outline.ShieldExclamation,
		},
		new: false,
	},
	{
		name: "shopping-bag",
		tags: [],
		svgs: {
			solid: Solid.ShoppingBag,
			outline: Outline.ShoppingBag,
		},
		new: false,
	},
	{
		name: "shopping-cart",
		tags: [],
		svgs: {
			solid: Solid.ShoppingCart,
			outline: Outline.ShoppingCart,
		},
		new: false,
	},
	{
		name: "sort-ascending",
		tags: [],
		svgs: {
			solid: Solid.SortAscending,
			outline: Outline.SortAscending,
		},
		new: false,
	},
	{
		name: "sort-descending",
		tags: [],
		svgs: {
			solid: Solid.SortDescending,
			outline: Outline.SortDescending,
		},
		new: false,
	},
	{
		name: "sparkles",
		tags: [],
		svgs: {
			solid: Solid.Sparkles,
			outline: Outline.Sparkles,
		},
		new: false,
	},
	{
		name: "speakerphone",
		tags: [],
		svgs: {
			solid: Solid.Speakerphone,
			outline: Outline.Speakerphone,
		},
		new: false,
	},
	{
		name: "star",
		tags: [],
		svgs: {
			solid: Solid.Star,
			outline: Outline.Star,
		},
		new: false,
	},
	{
		name: "status-offline",
		tags: [],
		svgs: {
			solid: Solid.StatusOffline,
			outline: Outline.StatusOffline,
		},
		new: true,
	},
	{
		name: "status-online",
		tags: [],
		svgs: {
			solid: Solid.StatusOnline,
			outline: Outline.StatusOnline,
		},
		new: true,
	},
	{
		name: "stop",
		tags: [],
		svgs: {
			solid: Solid.Stop,
			outline: Outline.Stop,
		},
		new: false,
	},
	{
		name: "sun",
		tags: [],
		svgs: {
			solid: Solid.Sun,
			outline: Outline.Sun,
		},
		new: false,
	},
	{
		name: "support",
		tags: [],
		svgs: {
			solid: Solid.Support,
			outline: Outline.Support,
		},
		new: false,
	},
	{
		name: "switch-horizontal",
		tags: [],
		svgs: {
			solid: Solid.SwitchHorizontal,
			outline: Outline.SwitchHorizontal,
		},
		new: false,
	},
	{
		name: "switch-vertical",
		tags: [],
		svgs: {
			solid: Solid.SwitchVertical,
			outline: Outline.SwitchVertical,
		},
		new: false,
	},
	{
		name: "table",
		tags: [],
		svgs: {
			solid: Solid.Table,
			outline: Outline.Table,
		},
		new: true,
	},
	{
		name: "tag",
		tags: [],
		svgs: {
			solid: Solid.Tag,
			outline: Outline.Tag,
		},
		new: false,
	},
	{
		name: "template",
		tags: [],
		svgs: {
			solid: Solid.Template,
			outline: Outline.Template,
		},
		new: false,
	},
	{
		name: "terminal",
		tags: [],
		svgs: {
			solid: Solid.Terminal,
			outline: Outline.Terminal,
		},
		new: false,
	},
	{
		name: "thumb-down",
		tags: [],
		svgs: {
			solid: Solid.ThumbDown,
			outline: Outline.ThumbDown,
		},
		new: false,
	},
	{
		name: "thumb-up",
		tags: [],
		svgs: {
			solid: Solid.ThumbUp,
			outline: Outline.ThumbUp,
		},
		new: false,
	},
	{
		name: "ticket",
		tags: [],
		svgs: {
			solid: Solid.Ticket,
			outline: Outline.Ticket,
		},
		new: false,
	},
	{
		name: "translate",
		tags: [],
		svgs: {
			solid: Solid.Translate,
			outline: Outline.Translate,
		},
		new: false,
	},
	{
		name: "trash",
		tags: [],
		svgs: {
			solid: Solid.Trash,
			outline: Outline.Trash,
		},
		new: false,
	},
	{
		name: "trending-down",
		tags: [],
		svgs: {
			solid: Solid.TrendingDown,
			outline: Outline.TrendingDown,
		},
		new: false,
	},
	{
		name: "trending-up",
		tags: [],
		svgs: {
			solid: Solid.TrendingUp,
			outline: Outline.TrendingUp,
		},
		new: false,
	},
	{
		name: "truck",
		tags: [],
		svgs: {
			solid: Solid.Truck,
			outline: Outline.Truck,
		},
		new: true,
	},
	{
		name: "upload",
		tags: [],
		svgs: {
			solid: Solid.Upload,
			outline: Outline.Upload,
		},
		new: false,
	},
	{
		name: "user",
		tags: [],
		svgs: {
			solid: Solid.User,
			outline: Outline.User,
		},
		new: false,
	},
	{
		name: "user-add",
		tags: [],
		svgs: {
			solid: Solid.UserAdd,
			outline: Outline.UserAdd,
		},
		new: false,
	},
	{
		name: "user-circle",
		tags: [],
		svgs: {
			solid: Solid.UserCircle,
			outline: Outline.UserCircle,
		},
		new: false,
	},
	{
		name: "user-group",
		tags: [],
		svgs: {
			solid: Solid.UserGroup,
			outline: Outline.UserGroup,
		},
		new: false,
	},
	{
		name: "user-remove",
		tags: [],
		svgs: {
			solid: Solid.UserRemove,
			outline: Outline.UserRemove,
		},
		new: false,
	},
	{
		name: "users",
		tags: [],
		svgs: {
			solid: Solid.Users,
			outline: Outline.Users,
		},
		new: false,
	},
	{
		name: "variable",
		tags: [],
		svgs: {
			solid: Solid.Variable,
			outline: Outline.Variable,
		},
		new: true,
	},
	{
		name: "video-camera",
		tags: [],
		svgs: {
			solid: Solid.VideoCamera,
			outline: Outline.VideoCamera,
		},
		new: true,
	},
	{
		name: "view-boards",
		tags: [],
		svgs: {
			solid: Solid.ViewBoards,
			outline: Outline.ViewBoards,
		},
		new: false,
	},
	{
		name: "view-grid",
		tags: [],
		svgs: {
			solid: Solid.ViewGrid,
			outline: Outline.ViewGrid,
		},
		new: false,
	},
	{
		name: "view-grid-add",
		tags: [],
		svgs: {
			solid: Solid.ViewGridAdd,
			outline: Outline.ViewGridAdd,
		},
		new: false,
	},
	{
		name: "view-list",
		tags: [],
		svgs: {
			solid: Solid.ViewList,
			outline: Outline.ViewList,
		},
		new: false,
	},
	{
		name: "volume-off",
		tags: [],
		svgs: {
			solid: Solid.VolumeOff,
			outline: Outline.VolumeOff,
		},
		new: false,
	},
	{
		name: "volume-up",
		tags: [],
		svgs: {
			solid: Solid.VolumeUp,
			outline: Outline.VolumeUp,
		},
		new: false,
	},
	{
		name: "wifi",
		tags: [],
		svgs: {
			solid: Solid.Wifi,
			outline: Outline.Wifi,
		},
		new: true,
	},
	{
		name: "x",
		tags: [],
		svgs: {
			solid: Solid.X,
			outline: Outline.X,
		},
		new: false,
	},
	{
		name: "x-circle",
		tags: [],
		svgs: {
			solid: Solid.XCircle,
			outline: Outline.XCircle,
		},
		new: false,
	},
	{
		name: "zoom-in",
		tags: [],
		svgs: {
			solid: Solid.ZoomIn,
			outline: Outline.ZoomIn,
		},
		new: false,
	},
	{
		name: "zoom-out",
		tags: [],
		svgs: {
			solid: Solid.ZoomOut,
			outline: Outline.ZoomOut,
		},
		new: false,
	},
]

// Auto-generates tags based on a hyphenated name.
//
// "zoom" -> ["zoom"]
// "zoom-out" -> ["zoom-out", "zoomout", "zoom", "out"]
//
function autoTags(name) {
	const tags = name.split("-")
	if (tags.length === 1) {
		return tags
	}
	return [name, tags.join(""), ...tags]
}

;(() => {
	for (const each of dataset) {
		const auto = autoTags(each.name)
		const alt = tags[each.name]
		const altAuto = []
		if (alt !== undefined) {
			for (const each of alt) {
				altAuto.push(...autoTags(each))
			}
		}
		const deduped = [...new Set([...auto, ...altAuto])]
		each.tags.push(...deduped)
	}
})()

export default dataset
