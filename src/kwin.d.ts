declare namespace KWin {
    //#region ClientAreaOption
    /** geometry where a window will be initially placed after being mapped */
    export const PlacementArea: WorkspaceWrapper.ClientAreaOption.PlacementArea
    /** ???  window movement snapping area?  ignore struts */
    export const MovementArea: WorkspaceWrapper.ClientAreaOption.MovementArea
    /** geometry to which a window will be maximized */
    export const MaximizeArea: WorkspaceWrapper.ClientAreaOption.MaximizeArea
    /** like MaximizeArea, but ignore struts - used e.g. for topmenu */
    export const MaximizeFullArea: WorkspaceWrapper.ClientAreaOption.MaximizeFullArea
    /** area for fullscreen windows */
    export const FullScreenArea: WorkspaceWrapper.ClientAreaOption.FullScreenArea
    /** whole workarea (all screens together) */
    export const WorkArea: WorkspaceWrapper.ClientAreaOption.WorkArea
    /** whole area (all screens together), ignore struts */
    export const FullArea: WorkspaceWrapper.ClientAreaOption.FullArea
    /** one whole screen, ignore struts */
    export const ScreenArea: WorkspaceWrapper.ClientAreaOption.ScreenArea
    //#endregion

    //#region ElectricBorder
    export const ElectricTop = WorkspaceWrapper.ElectricBorder.ElectricTop
    export const ElectricTopRight = WorkspaceWrapper.ElectricBorder.ElectricTopRight
    export const ElectricRight = WorkspaceWrapper.ElectricBorder.ElectricRight
    export const ElectricBottomRight = WorkspaceWrapper.ElectricBorder.ElectricBottomRight
    export const ElectricBottom = WorkspaceWrapper.ElectricBorder.ElectricBottom
    export const ElectricBottomLeft = WorkspaceWrapper.ElectricBorder.ElectricBottomLeft
    export const ElectricLeft = WorkspaceWrapper.ElectricBorder.ElectricLeft
    export const ElectricTopLeft = WorkspaceWrapper.ElectricBorder.ElectricTopLeft
    export const ELECTRIC_COUNT = WorkspaceWrapper.ElectricBorder.ELECTRIC_COUNT
    export const ElectricNone = WorkspaceWrapper.ElectricBorder.ElectricNone
    //#endregion

    namespace ExtendedCursor {
        /**
         * Extension of {@link Qt.CursorShape} with values not currently present there
         */
        enum Shape {
            SizeNorthWest = 0x100 + 0,
            SizeNorth = 0x100 + 1,
            SizeNorthEast = 0x100 + 2,
            SizeEast = 0x100 + 3,
            SizeWest = 0x100 + 4,
            SizeSouthEast = 0x100 + 5,
            SizeSouth = 0x100 + 6,
            SizeSouthWest = 0x100 + 7
        }
    }

    /**
     * Maximize mode. These values specify how a window is maximized.
     *
     * **Note:** these values are written to session files, don't change the order
     */
    enum MaximizeMode {
        /** The window is not maximized in any direction. */
        MaximizeRestore = 0,
        /** The window is maximized vertically. */
        MaximizeVertical = 1,
        /** The window is maximized horizontally. */
        MaximizeHorizontal = 2,
        /** Equal to `MaximizeVertical` | `MaximizeHorizontal` */
        MaximizeFull = MaximizeVertical | MaximizeHorizontal
    }

    enum Layer {
        UnknownLayer = -1,
        FirstLayer = 0,
        DesktopLayer = FirstLayer,
        BelowLayer,
        NormalLayer,
        DockLayer,
        AboveLayer,
        /** layer for windows of type notification */
        NotificationLayer,
        /** active fullscreen, or active dialog */
        ActiveLayer,
        /** tooltips, sub- and context menus */
        PopupLayer,
        /** layer for notifications that should be shown even on top of fullscreen */
        CriticalNotificationLayer,
        /** layer for On Screen Display windows such as volume feedback */
        OnScreenDisplayLayer,
        /** layer for override redirect windows. */
        UnmanagedLayer,
        /** number of layers, must be last */
        NumLayers
    }

    enum OpenGLPlatformInterface {
        NoOpenGLPlatformInterface = 0,
        GlxPlatformInterface,
        EglPlatformInterface
    }

    /**
     * Wrapper round {@link Qt.CursorShape} with extensions enums into a single entity
     */
    class CursorShape {
        constructor()
        constructor(qtShape: Qt.CursorShape)
        constructor(kwinShape: KWin.ExtendedCursor.Shape)

        name: ArrayBuffer
    }

    class VirtualDesktop extends QObject {
        readonly id: string
        readonly x11DesktopNumber: number

        name: string

        readonly nameChanged: Signal<() => void>
        readonly x11DesktopNumberChanged: Signal<() => void>
        /**
         * Emitted just before the desktop gets destroyed.
         */
        readonly aboutToBeDestroyed: Signal<() => void>
    }

    class Toplevel extends QObject {
        //#region Read-only Properties
        readonly alpha: boolean
        readonly frameId: number
        /**
         * This property holds the geometry of the Toplevel, excluding invisible
         * portions, e.g. client-side and server-side drop-shadows, etc.
         *
         * @deprecated Use frameGeometry property instead.
         */
        readonly geometry: QRect
        /**
         * This property holds rectangle that the pixmap or buffer of this Toplevel
         * occupies on the screen. This rectangle includes invisible portions of the
         * client, e.g. client-side drop shadows, etc.
         */
        readonly bufferGeometry: QRect
        /**
         * This property holds the geometry of the Toplevel, excluding invisible
         * portions, e.g. server-side and client-side drop-shadows, etc.
         */
        readonly frameGeometry: QRect
        /**
         * This property holds the position of the Toplevel's frame geometry.
         */
        readonly pos: QPoint
        /**
         * This property holds the size of the Toplevel's frame geometry.
         */
        readonly size: QSize
        /**
         * This property holds the x position of the Toplevel's frame geometry.
         */
        readonly x: number
        /**
         * This property holds the y position of the Toplevel's frame geometry.
         */
        readonly y: number
        /**
         * This property holds the width of the Toplevel's frame geometry.
         */
        readonly width: number
        /**
         * This property holds the height of the Toplevel's frame geometry.
         */
        readonly height: number
        readonly visibleRect: QRect
        readonly screen: number
        readonly windowId: number
        readonly desktop: number
        /**
         * Whether the window is on all desktops. That is desktop is -1.
         */
        readonly onAllDesktops: boolean
        readonly rect: QRect
        readonly clientPos: QPoint
        readonly clientSize: QSize
        readonly resourceName: ArrayBuffer
        readonly resourceClass: ArrayBuffer
        readonly windowRole: ArrayBuffer
        /**
         * Returns whether the window is a desktop background window (the one with wallpaper).
         * See _NET_WM_WINDOW_TYPE_DESKTOP at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly desktopWindow: boolean
        /**
         * Returns whether the window is a dock (i.e. a panel).
         * See _NET_WM_WINDOW_TYPE_DOCK at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly dock: boolean
        /**
         * Returns whether the window is a standalone (detached) toolbar window.
         * See _NET_WM_WINDOW_TYPE_TOOLBAR at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly toolbar: boolean
        /**
         * Returns whether the window is a torn-off menu.
         * See _NET_WM_WINDOW_TYPE_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly menu: boolean
        /**
         * Returns whether the window is a "normal" window, i.e. an application or any other window
         * for which none of the specialized window types fit.
         * See _NET_WM_WINDOW_TYPE_NORMAL at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly normalWindow: boolean
        /**
         * Returns whether the window is a dialog window.
         * See _NET_WM_WINDOW_TYPE_DIALOG at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly dialog: boolean
        /**
         * Returns whether the window is a splashscreen. Note that many (especially older) applications
         * do not support marking their splash windows with this type.
         * See _NET_WM_WINDOW_TYPE_SPLASH at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly splash: boolean
        /**
         * Returns whether the window is a utility window, such as a tool window.
         * See _NET_WM_WINDOW_TYPE_UTILITY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly utility: boolean
        /**
         * Returns whether the window is a dropdown menu (i.e. a popup directly or indirectly open
         * from the applications menubar).
         * See _NET_WM_WINDOW_TYPE_DROPDOWN_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly dropdownMenu: boolean
        /**
         * Returns whether the window is a popup menu (that is not a torn-off or dropdown menu).
         * See _NET_WM_WINDOW_TYPE_POPUP_MENU at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly popupMenu: boolean
        /**
         * Returns whether the window is a tooltip.
         * See _NET_WM_WINDOW_TYPE_TOOLTIP at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly tooltip: boolean
        /**
         * Returns whether the window is a window with a notification.
         * See _NET_WM_WINDOW_TYPE_NOTIFICATION at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly notification: boolean
        /**
         * Returns whether the window is a window with a critical notification.
         */
        readonly criticalNotification: boolean
        /**
         * Returns whether the window is an On Screen Display.
         */
        readonly onScreenDisplay: boolean
        /**
         * Returns whether the window is a combobox popup.
         * See _NET_WM_WINDOW_TYPE_COMBO at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly comboBox: boolean
        /**
         * Returns whether the window is a Drag&Drop icon.
         * See _NET_WM_WINDOW_TYPE_DND at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly dndIcon: boolean
        /**
         * Returns the NETWM window type
         * See https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         */
        readonly windowType: number
        readonly activities: string[]
        /**
         * Whether this Toplevel is managed by KWin (it has control over its placement and other
         * aspects, as opposed to override-redirect windows that are entirely handled by the application).
         */
        readonly managed: boolean
        /**
         * Whether this Toplevel represents an already deleted window and only kept for the compositor for animations.
         */
        readonly deleted: boolean
        /**
         * Whether the window has an own shape
         */
        readonly shaped: boolean
        /**
         * Interface to the Wayland Surface.
         * Relevant only in Wayland, in X11 it will be nullptr
         */
        readonly surface: KWaylandServer.SurfaceInterface
        /**
         * Whether the window is a popup.
         */
        readonly popupWindow: boolean
        /**
         * Whether this Toplevel represents the outline.
         *
         * **Note:** It's always `false` if compositing is turned off.
         */
        readonly outline: boolean
        /**
         * This property holds a UUID to uniquely identify this Toplevel.
         */
        readonly internalId: QUuid
        /**
         * The pid of the process owning this window.
         *
         * @since 5.20
         */
        readonly pid: number
        /**
         * The position of this window within Workspace's window stack.
         */
        readonly stackingOrder: number
        //#endregion

        //#region Read-write Properties
        opacity: number
        /**
         * Whether the window does not want to be animated on window close.
         * There are legit reasons for this like a screenshot application which does not want it's
         * window being captured.
         */
        skipsCloseAnimation: boolean
        //#endregion

        //#region Signals
        readonly stackingOrderChanged: Signal<() => void>
        readonly shadeChanged: Signal<() => void>
        readonly opacityChanged: Signal<
            (toplevel: Toplevel, oldOpacity: number) => void
        >
        readonly damaged: Signal<(toplevel: Toplevel, damage: QRegion) => void>
        readonly inputTransformationChanged: Signal<() => void>
        /**
         * This signal is emitted when the Toplevel's frame geometry changes.
         * @deprecated since 5.19, use frameGeometryChanged instead
         */
        readonly geometryChanged: Signal<() => void>
        readonly geometryShapeChanged: Signal<
            (toplevel: Toplevel, old: QRect) => void
        >
        readonly windowClosed: Signal<
            (toplevel: Toplevel, deleted: Deleted) => void
        >
        readonly windowShown: Signal<(toplevel: Toplevel) => void>
        readonly windowHidden: Signal<(toplevel: Toplevel) => void>
        /**
         * Signal emitted when the window's shape state changed. That is if it did not have a shape
         * and received one or if the shape was withdrawn. Think of Chromium enabling/disabling KWin's
         * decoration.
         */
        readonly shapedChanged: Signal<() => void>
        /**
         * Emitted whenever the Toplevel's screen changes. This can happen either in consequence to
         * a screen being removed/added or if the Toplevel's geometry changes.
         * @since 4.11
         */
        readonly screenChanged: Signal<() => void>
        readonly skipCloseAnimationChanged: Signal<() => void>
        /**
         * Emitted whenever the window role of the window changes.
         * @since 5.0
         */
        readonly windowRoleChanged: Signal<() => void>
        /**
         * Emitted whenever the window class name or resource name of the window changes.
         * @since 5.0
         */
        readonly windowClassChanged: Signal<() => void>
        /**
         * @since 5.4
         */
        readonly hasAlphaChanged: Signal<() => void>
        /**
         * Emitted whenever the Surface for this Toplevel changes.
         */
        readonly surfaceChanged: Signal<() => void>
        /**
         * Emitted when the client's screen changes onto a screen of a different scale
         * or the screen we're on changes
         * @since 5.12
         */
        readonly screenScaleChanged: Signal<() => void>
        /**
         * Emitted whenever the client's shadow changes.
         * @since 5.15
         */
        readonly shadowChanged: Signal<() => void>
        /**
         * This signal is emitted when the Toplevel's buffer geometry changes.
         */
        readonly bufferGeometryChanged: Signal<
            (toplevel: Toplevel, oldGeometry: QRect) => void
        >
        /**
         * This signal is emitted when the Toplevel's frame geometry changes.
         */
        readonly frameGeometryChanged: Signal<
            (toplevel: Toplevel, oldGeometry: QRect) => void
        >
        /**
         * This signal is emitted when the Toplevel's client geometry has changed.
         */
        readonly clientGeometryChanged: Signal<
            (toplevel: Toplevel, oldGeometry: QRect) => void
        >
        /**
         * This signal is emitted when the visible geometry has changed.
         */
        readonly visibleGeometryChanged: Signal<() => void>
        //#endregion

        //#region Functions
        addRepaint(r: QRect): void
        addRepaint(r: QRegion): void
        addRepaint(x: number, y: number, w: number, h: number): void
        addLayerRepaint(r: QRect): void
        addLayerRepaint(r: QRegion): void
        addLayerRepaint(x: number, y: number, w: number, h: number): void
        addRepaintFull(): void
        //#endregion
    }

    // TODO Is this ever not `undefined`?
    type Deleted = any

    class AbstractClient extends Toplevel {
        //#region Read-only Properties
        /**
         * Whether the Client can be set to fullScreen. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         */
        readonly fullScreenable: boolean
        /**
         * Whether this Client is active or not. Use {@link WorkspaceWrapper.activateClient} to activate a Client.
         * @see {@link WorkspaceWrapper.activateClient}
         */
        readonly active: boolean
        /**
         * The x11 ids for all desktops this client is in. On X11 this list will always have a length of 1
         *
         * @deprecated prefer using apis that use VirtualDesktop objects
         */
        readonly x11DesktopIds: number[]
        /**
         * Whether the window can be closed by the user.
         */
        readonly closeable: boolean
        readonly icon: QIcon
        /**
         * Whether the Client can be shaded. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         */
        readonly shadeable: boolean
        /**
         * Whether the Client can be minimized. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         */
        readonly minimizable: boolean
        /**
         * The optional geometry representing the minimized Client in e.g a taskbar.
         * See _NET_WM_ICON_GEOMETRY at https://standards.freedesktop.org/wm-spec/wm-spec-latest.html .
         * The value is evaluated each time the getter is called.
         * Because of that no changed signal is provided.
         */
        readonly iconGeometry: QRect
        /**
         * Returns whether the window is any of special windows types (desktop, dock, splash, ...),
         * i.e. window types that usually don't have a window frame and the user does not use window
         * management (moving, raising,...) on them.
         * The value is evaluated each time the getter is called.
         * Because of that no changed signal is provided.
         */
        readonly specialWindow: boolean
        /**
         * The Caption of the Client. Read from WM_NAME property together with a suffix for hostname and shortcut.
         * To read only the caption as provided by WM_NAME, use the getter with an additional `false` value.
         */
        readonly caption: string
        /**
         * Minimum size as specified in WM_NORMAL_HINTS
         */
        readonly minSize: QSize
        /**
         * Maximum size as specified in WM_NORMAL_HINTS
         */
        readonly maxSize: QSize
        /**
         * Whether the Client can accept keyboard focus.
         * The value is evaluated each time the getter is called.
         * Because of that no changed signal is provided.
         */
        readonly wantsInput: boolean
        /**
         * Whether the Client is a transient Window to another Window.
         * @see transientFor
         */
        readonly transient: boolean
        /**
         * The Client to which this Client is a transient if any.
         */
        readonly transientFor?: KWin.AbstractClient
        /**
         * Whether the Client represents a modal window.
         */
        readonly modal: boolean
        /**
         * Whether the Client is currently being moved by the user.
         * Notify signal is emitted when the Client starts or ends move/resize mode.
         */
        readonly move: boolean
        /**
         * Whether the Client is currently being resized by the user.
         * Notify signal is emitted when the Client starts or ends move/resize mode.
         */
        readonly resize: boolean
        /**
         * Whether the decoration is currently using an alpha channel.
         */
        readonly decorationHasAlpha: boolean
        /**
         * Whether the Client provides context help. Mostly needed by decorations to decide whether to
         * show the help button or not.
         */
        readonly providesContextHelp: boolean
        /**
         * Whether the Client can be maximized both horizontally and vertically.
         * The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         */
        readonly maximizable: boolean
        /**
         * Whether the Client is moveable. Even if it is not moveable, it might be possible to move
         * it to another screen. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         * @see moveableAcrossScreens
         */
        readonly moveable: boolean
        /**
         * Whether the Client can be moved to another screen. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         * @see moveable
         */
        readonly moveableAcrossScreens: boolean
        /**
         * Whether the Client can be resized. The property is evaluated each time it is invoked.
         * Because of that there is no notify signal.
         */
        readonly resizeable: boolean
        /**
         * The desktop file name of the application this AbstractClient belongs to.
         *
         * This is either the base name without full path and without file extension of the
         * desktop file for the window's application (e.g. "org.kde.foo").
         *
         * The application's desktop file name can also be the full path to the desktop file
         * (e.g. "/opt/kde/share/org.kde.foo.desktop") in case it's not in a standard location.
         */
        readonly desktopFileName: ArrayBuffer
        /**
         * Whether an application menu is available for this Client
         */
        readonly hasApplicationMenu: boolean
        /**
         * Whether the application menu for this Client is currently opened
         */
        readonly applicationMenuActive: boolean
        /**
         * Whether this client is unresponsive.
         *
         * When an application failed to react on a ping request in time, it is
         * considered unresponsive. This usually indicates that the application froze or crashed.
         */
        readonly unresponsive: boolean
        /**
         * The color scheme set on this client
         * Absolute file path, or name of palette in the user's config directory following KColorSchemes format.
         * An empty string indicates the default palette from kdeglobals is used.
         * **Note:** this indicates the colour scheme requested, which might differ from the theme applied if the colorScheme cannot be found
         */
        readonly colorScheme: string
        readonly layer: KWin.Layer
        //#endregion

        //#region Read-write Properties
        /**
         * Whether this Client is fullScreen. A Client might either be fullScreen due to the _NET_WM property
         * or through a legacy support hack. The fullScreen state can only be changed if the Client does not
         * use the legacy hack. To be sure whether the state changed, connect to the notify signal.
         */
        fullScreen: boolean
        /**
         * The desktop this Client is on. If the Client is on all desktops the property has value -1.
         * This is a legacy property, use x11DesktopIds instead
         *
         * @deprecated Use the desktops property instead.
         */
        desktop: number
        /**
         * The virtual desktops this client is on. If it's on all desktops, the list is empty.
         */
        desktops: KWin.VirtualDesktop[]
        /**
         * Whether the Client is on all desktops. That is desktop is -1.
         */
        onAllDesktops: boolean
        /**
         * The activities this client is on. If it's on all activities the property is empty.
         */
        activities: string[]
        /**
         * Indicates that the window should not be included on a taskbar.
         */
        skipTaskbar: boolean
        /**
         * Indicates that the window should not be included on a Pager.
         */
        skipPager: boolean
        /**
         * Whether the Client should be excluded from window switching effects.
         */
        skipSwitcher: boolean
        /**
         * Whether the Client is set to be kept above other windows.
         */
        keepAbove: boolean
        /**
         * Whether the Client is set to be kept below other windows.
         */
        keepBelow: boolean
        /**
         * Whether the Client is shaded.
         */
        shade: boolean
        /**
         * Whether the Client is minimized.
         */
        minimized: boolean
        /**
         * Whether window state _NET_WM_STATE_DEMANDS_ATTENTION is set. This state indicates that some
         * action in or with the window happened. For example, it may be set by the Window Manager if
         * the window requested activation but the Window Manager refused it, or the application may set
         * it if it finished some work. This state may be set by both the Client and the Window Manager.
         * It should be unset by the Window Manager when it decides the window got the required attention
         * (usually, that it got activated).
         */
        demandsAttention: boolean
        /**
         * The geometry of this Client. Be aware that depending on resize mode the frameGeometryChanged
         * signal might be emitted at each resize step or only at the end of the resize operation.
         *
         * @deprecated Use frameGeometry
         */
        geometry: QRect
        /**
         * The geometry of this Client. Be aware that depending on resize mode the frameGeometryChanged
         * signal might be emitted at each resize step or only at the end of the resize operation.
         */
        frameGeometry: QRect
        /**
         * Whether the window has a decoration or not.
         * This property is not allowed to be set by applications themselves.
         * The decision whether a window has a border or not belongs to the window manager.
         * If this property gets abused by application developers, it will be removed again.
         */
        noBorder: boolean
        //#endregion

        //#region Signals
        readonly fullScreenChanged: Signal<() => void>
        readonly skipTaskbarChanged: Signal<() => void>
        readonly skipPagerChanged: Signal<() => void>
        readonly skipSwitcherChanged: Signal<() => void>
        readonly iconChanged: Signal<() => void>
        readonly activeChanged: Signal<() => void>
        readonly keepAboveChanged: Signal<(old: boolean) => void>
        readonly keepBelowChanged: Signal<(old: boolean) => void>
        /**
         * Emitted whenever the demands attention state changes.
         */
        readonly demandsAttentionChanged: Signal<() => void>
        readonly desktopPresenceChanged: Signal<
            (client: KWin.AbstractClient, old: number) => void
        >
        readonly desktopChanged: Signal<() => void>
        readonly activitiesChanged: Signal<
            (client: KWin.AbstractClient) => void
        >
        readonly x11DesktopIdsChanged: Signal<() => void>
        readonly minimizedChanged: Signal<() => void>
        readonly clientMinimized: Signal<
            (client: KWin.AbstractClient, animate: boolean) => void
        >
        readonly clientUnminimized: Signal<
            (client: KWin.AbstractClient, animate: boolean) => void
        >
        readonly paletteChanged: Signal<(p: QPalette) => void>
        readonly colorSchemeChanged: Signal<() => void>
        readonly captionChanged: Signal<() => void>
        readonly clientMaximizedStateChanged: Signal<
            | ((client: KWin.AbstractClient, mode: MaximizeMode) => void)
            | ((c: KWin.AbstractClient, h: boolean, v: boolean) => void)
        >
        readonly transientChanged: Signal<() => void>
        readonly modalChanged: Signal<() => void>
        readonly quickTileModeChanged: Signal<() => void>
        readonly moveResizedChanged: Signal<() => void>
        readonly moveResizeCursorChanged: Signal<(shape: CursorShape) => void>
        readonly clientStartUserMovedResized: Signal<
            (client: KWin.AbstractClient) => void
        >
        readonly clientStepUserMovedResized: Signal<
            (client: KWin.AbstractClient, rect: QRect) => void
        >
        readonly clientFinishUserMovedResized: Signal<
            (client: KWin.AbstractClient) => void
        >
        readonly closeableChanged: Signal<(old: boolean) => void>
        readonly minimizeableChanged: Signal<(old: boolean) => void>
        readonly shadeableChanged: Signal<(old: boolean) => void>
        readonly maximizeableChanged: Signal<(old: boolean) => void>
        readonly desktopFileNameChanged: Signal<() => void>
        readonly applicationMenuChanged: Signal<() => void>
        readonly hasApplicationMenuChanged: Signal<(old: boolean) => void>
        readonly applicationMenuActiveChanged: Signal<(old: boolean) => void>
        readonly unresponsiveChanged: Signal<(old: boolean) => void>
        readonly decorationChanged: Signal<() => void>
        //#endregion

        //#region Functions
        closeWindow(): void
        /**
         * Sets the maximization according to `vertically` and `horizontally`.
         */
        setMaximize(vertically: boolean, horizontally: boolean): void
        //#endregion
    }

    class X11Client extends AbstractClient {
        //#region Read-only Properties
        /**
         * By how much the window wishes to grow/shrink at least. Usually QSize(1,1).
         * MAY BE DISOBEYED BY THE WM! It's only for information, do NOT rely on it at all.
         * The value is evaluated each time the getter is called.
         * Because of that no changed signal is provided.
         */
        readonly basicUnit: QSize
        /**
         * Whether the Client uses client side window decorations.
         * Only GTK+ are detected.
         */
        readonly clientSideDecorated: boolean
        //#endregion

        //#region Read-write Properties
        /**
         * A client can block compositing. That is while the Client is alive and the state is set,
         * Compositing is suspended and is resumed when there are no Clients blocking compositing any
         * more.
         *
         * This is actually set by a window property, unfortunately not used by the target application
         * group. For convenience it's exported as a property to the scripts.
         *
         * Use with care!
         */
        blocksCompositing: boolean
        //#endregion

        //#region Signals
        readonly clientManaging: Signal<(client: X11Client) => void>
        readonly clientFullScreenSet: Signal<
            (
                client: X11Client,
                vertically: boolean,
                horizontally: boolean
            ) => void
        >
        /**
         * Emitted whenever the Client want to show it menu
         */
        readonly showRequest: Signal<() => void>
        /**
         * Emitted whenever the Client's menu is closed
         */
        readonly menuHidden: Signal<() => void>
        /**
         * Emitted whenever the Client's menu is available
         */
        readonly appMenuAvailable: Signal<() => void>
        /**
         * Emitted whenever the Client's menu is unavailable
         */
        readonly appMenuUnavailable: Signal<() => void>
        /**
         * Emitted whenever the Client's block compositing state changes.
         */
        readonly blockingCompositingChanged: Signal<(client: X11Client) => void>
        readonly clientSideDecoratedChanged: Signal<() => void>
        //#endregion

        //#region Functions
        closeWindow(): void
        updateCaption(): void
        //#endregion
    }

    namespace WorkspaceWrapper {
        enum ClientAreaOption {
            /** geometry where a window will be initially placed after being mapped */
            PlacementArea = 0,
            /** ???  window movement snapping area?  ignore struts */
            MovementArea = 1,
            /** geometry to which a window will be maximized */
            MaximizeArea = 2,
            /** like MaximizeArea, but ignore struts - used e.g. for topmenu */
            MaximizeFullArea = 3,
            /** area for fullscreen windows */
            FullScreenArea = 4,
            /** whole workarea (all screens together) */
            WorkArea = 5,
            /** whole area (all screens together), ignore struts */
            FullArea = 6,
            /** one whole screen, ignore struts */
            ScreenArea = 7
        }

        enum ElectricBorder {
            ElectricTop = 0,
            ElectricTopRight = 1,
            ElectricRight = 2,
            ElectricBottomRight = 3,
            ElectricBottom = 4,
            ElectricBottomLeft = 5,
            ElectricLeft = 6,
            ElectricTopLeft = 7,
            ELECTRIC_COUNT = 8,
            ElectricNone = 9
        }
    }

    class WorkspaceWrapper extends QObject {
        //#region Read-only Properties
        readonly desktopGridSize: QSize
        readonly desktopGridWidth: number
        readonly desktopGridHeight: number
        readonly workspaceWidth: number
        readonly workspaceHeight: number
        readonly workspaceSize: QSize
        /**
         * The same of the display, that is all screens.
         * @deprecated since 5.0 use virtualScreenSize
         */
        readonly displaySize: QSize
        /**
         * The width of the display, that is width of all combined screens.
         * @deprecated since 5.0 use virtualScreenSize
         */
        readonly displayWidth: number
        /**
         * The height of the display, that is height of all combined screens.
         * @deprecated since 5.0 use virtualScreenSize
         */
        readonly displayHeight: number
        readonly activeScreen: number
        readonly numScreens: number
        readonly activities: string[]
        /**
         * The bounding size of all screens combined. Overlapping areas
         * are not counted multiple times.
         * @see {@link WorkspaceWrapper.virtualScreenGeometry virtualScreenGeometry}
         */
        readonly virtualScreenSize: QSize
        /**
         * The bounding geometry of all outputs combined. Always starts at (0,0) and has
         * virtualScreenSize as it's size.
         * @see {@link WorkspaceWrapper.virtualScreenSize virtualScreenSize}
         */
        readonly virtualScreenGeometry: QRect
        /**
         * The current position of the cursor.
         */
        readonly cursorPos: QPoint
        //#endregion

        //#region Read-write Properties
        /**
         * @deprecated use the {@link WorkspaceWrapper.currentVirtualDesktop currentVirtualDesktop} property instead
         */
        currentDesktop: number
        currentVirtualDesktop: VirtualDesktop
        activeClient: AbstractClient
        /**
         * The number of desktops currently used. Minimum number of desktops is 1, maximum 20.
         */
        desktops: number
        currentActivity: string
        //#endregion

        //#region Signals
        readonly desktopPresenceChanged: Signal<
            (client: AbstractClient, desktop: number) => void
        >
        readonly currentDesktopChanged: Signal<
            (desktop: number, client: AbstractClient) => void
        >
        readonly clientAdded: Signal<(client: AbstractClient) => void>
        readonly clientRemoved: Signal<(client: AbstractClient) => void>
        readonly clientManaging: Signal<(client: X11Client) => void>
        readonly clientMinimized: Signal<(client: AbstractClient) => void>
        readonly clientUnminimized: Signal<(client: AbstractClient) => void>
        readonly clientRestored: Signal<(client: X11Client) => void>
        readonly clientMaximizeSet: Signal<
            (client: AbstractClient, h: boolean, v: boolean) => void
        >
        readonly killWindowCalled: Signal<(client: X11Client) => void>
        readonly clientActivated: Signal<(client: AbstractClient) => void>
        readonly clientFullScreenSet: Signal<
            (client: X11Client, fullScreen: boolean, user: boolean) => void
        >
        readonly clientSetKeepAbove: Signal<
            (client: X11Client, keepAbove: boolean) => void
        >
        /**
         * Signal emitted whenever the number of desktops changed.
         * To get the current number of desktops use the property desktops.
         * @param oldNumberOfDesktops The previous number of desktops.
         */
        readonly numberDesktopsChanged: Signal<
            (oldNumberOfDesktops: number) => void
        >
        /**
         * Signal emitted whenever the layout of virtual desktops changed.
         * That is desktopGrid(Size/Width/Height) will have new values.
         * @since 4.11
         */
        readonly desktopLayoutChanged: Signal<() => void>
        /**
         * The demands attention state for Client `client` changed to `set`.
         * @param client The Client for which demands attention changed
         * @param set New value of demands attention
         */
        readonly clientDemandsAttentionChanged: Signal<
            (client: AbstractClient, set: boolean) => void
        >
        /**
         * Signal emitted when the number of screens changes.
         * @param count The new number of screens
         */
        readonly numberScreensChanged: Signal<(count: number) => void>
        /**
         * This signal is emitted when the size of `screen` changes.
         * Don't forget to fetch an updated client area.
         *
         * @deprecated Use {@link Toplevel.geometryChanged} signal instead.
         */
        readonly screenResized: Signal<(screen: number) => void>
        /**
         * Signal emitted whenever the current activity changed.
         * @param id id of the new activity
         */
        readonly currentActivityChanged: Signal<(id: string) => void>
        /**
         * Signal emitted whenever the list of activities changed.
         * @param id id of the new activity
         */
        readonly activitiesChanged: Signal<(id: string) => void>
        /**
         * This signal is emitted when a new activity is added
         * @param id id of the new activity
         */
        readonly activityAdded: Signal<(id: string) => void>
        /**
         * This signal is emitted when the activity
         * is removed
         * @param id id of the removed activity
         */
        readonly activityRemoved: Signal<(id: string) => void>
        /**
         * Emitted whenever the virtualScreenSize changes.
         * @see {@link virtualScreenSize}
         * @since 5.0
         */
        readonly virtualScreenSizeChanged: Signal<() => void>
        /**
         * Emitted whenever the virtualScreenGeometry changes.
         * @see {@link virtualScreenGeometry}
         * @since 5.0
         */
        readonly virtualScreenGeometryChanged: Signal<() => void>
        /**
         * This signal is emitted when the current virtual desktop changes.
         *
         * @since 5.23
         */
        readonly currentVirtualDesktopChanged: Signal<() => void>
        /**
         * This signal is emitted when the cursor position changes.
         * @see {@link cursorPos}
         */
        readonly cursorPosChanged: Signal<() => void>
        //#endregion

        //#region Functions
        slotSwitchDesktopNext(): void
        slotSwitchDesktopPrevious(): void
        slotSwitchDesktopRight(): void
        slotSwitchDesktopLeft(): void
        slotSwitchDesktopUp(): void
        slotSwitchDesktopDown(): void
        slotSwitchToNextScreen(): void
        slotWindowToNextScreen(): void
        slotToggleShowDesktop(): void
        slotWindowMaximize(): void
        slotWindowMaximizeVertical(): void
        slotWindowMaximizeHorizontal(): void
        slotWindowMinimize(): void
        slotWindowShade(): void
        slotWindowRaise(): void
        slotWindowLower(): void
        slotWindowRaiseOrLower(): void
        slotActivateAttentionWindow(): void
        slotWindowMoveLeft(): void
        slotWindowMoveRight(): void
        slotWindowMoveUp(): void
        slotWindowMoveDown(): void
        slotWindowExpandHorizontal(): void
        slotWindowExpandVertical(): void
        slotWindowShrinkHorizontal(): void
        slotWindowShrinkVertical(): void
        slotWindowQuickTileLeft(): void
        slotWindowQuickTileRight(): void
        slotWindowQuickTileTop(): void
        slotWindowQuickTileBottom(): void
        slotWindowQuickTileTopLeft(): void
        slotWindowQuickTileTopRight(): void
        slotWindowQuickTileBottomLeft(): void
        slotWindowQuickTileBottomRight(): void
        slotSwitchWindowUp(): void
        slotSwitchWindowDown(): void
        slotSwitchWindowRight(): void
        slotSwitchWindowLeft(): void
        slotIncreaseWindowOpacity(): void
        slotLowerWindowOpacity(): void
        slotWindowOperations(): void
        slotWindowClose(): void
        slotWindowMove(): void
        slotWindowResize(): void
        slotWindowAbove(): void
        slotWindowBelow(): void
        slotWindowOnAllDesktops(): void
        slotWindowFullScreen(): void
        slotWindowNoBorder(): void
        slotWindowToNextDesktop(): void
        slotWindowToPreviousDesktop(): void
        slotWindowToDesktopRight(): void
        slotWindowToDesktopLeft(): void
        slotWindowToDesktopUp(): void
        slotWindowToDesktopDown(): void
        /**
         * Sends the AbstractClient to the given `screen`.
         */
        sendClientToScreen(client: AbstractClient, screen: number): void
        /**
         * Shows an outline at the specified `geometry`.
         * If an outline is already shown the outline is moved to the new position.
         * Use hideOutline to remove the outline again.
         */
        showOutline(geometry: QRect): void
        /**
         * Overloaded method for convenience.
         */
        showOutline(x: number, y: number, width: number, height: number): void
        /**
         * Hides the outline previously shown by showOutline.
         */
        hideOutline(): void

        /**
         * Returns the geometry a Client can use with the specified option.
         * This method should be preferred over other methods providing screen sizes as the
         * various options take constraints such as struts set on panels into account.
         * This method is also multi screen aware, but there are also options to get full areas.
         * @param option The type of area which should be considered
         * @param screen The screen for which the area should be considered
         * @param desktop The desktop for which the area should be considered, in general there should not be a difference
         * @returns The specified screen geometry
         */
        clientArea(
            option: WorkspaceWrapper.ClientAreaOption,
            screen: number,
            desktop: number
        ): QRect
        /**
         * Overloaded method for convenience.
         * @param option The type of area which should be considered
         * @param point The coordinates which have to be included in the area
         * @param desktop The desktop for which the area should be considered, in general there should not be a difference
         * @returns The specified screen geometry
         */
        clientArea(
            option: WorkspaceWrapper.ClientAreaOption,
            point: QPoint,
            desktop: number
        ): QRect
        /**
         * Overloaded method for convenience.
         * @param client The Client for which the area should be retrieved
         * @returns The specified screen geometry
         */
        clientArea(
            option: WorkspaceWrapper.ClientAreaOption,
            client: AbstractClient
        ): QRect
        // clientArea(option: ClientAreaOption, client: AbstractClient): QRect
        /**
         * Returns the name for the given `desktop`.
         */
        desktopName(desktop: number): string
        /**
         * Create a new virtual desktop at the requested position.
         * @param position The position of the desktop. It should be in range [0, count].
         * @param name The name for the new desktop, if empty the default name will be used.
         */
        createDesktop(position: number, name: string): void
        /**
         * Remove the virtual desktop at the requested position
         * @param position The position of the desktop to be removed. It should be in range [0, count - 1].
         */
        removeDesktop(position: number): void
        /**
         * Provides support information about the currently running KWin instance.
         */
        supportInformation(): string
        /**
         * Finds the Client with the given `windowId`.
         * @param windowId The window Id of the Client
         * @return The found Client or `null`
         */
        getClient(windowId: number): X11Client
        //#endregion
    }

    class QtScriptWorkspaceWrapper extends WorkspaceWrapper {
        //#region Functions
        clientList(): AbstractClient[]
        //#endregion
    }

    namespace Options {
        //#region Enums
        /**
         * This enum type specifies whether the Xwayland server must be restarted after a crash.
         */
        export enum XwaylandCrashPolicy {
            Stop,
            Restart
        }

        /**
         * This enum type specifies the latency level configured by the user.
         */
        export enum LatencyPolicy {
            LatencyExteremelyLow,
            LatencyLow,
            LatencyMedium,
            LatencyHigh,
            LatencyExtremelyHigh
        }

        /**
         * This enum type specifies the method for estimating the expected render time.
         */
        export enum RenderTimeEstimator {
            RenderTimeEstimatorMinimum,
            RenderTimeEstimatorMaximum,
            RenderTimeEstimatorAverage
        }

        /**
         * This enum type is used to specify the focus policy.
         *
         * Note that FocusUnderMouse and FocusStrictlyUnderMouse are not
         * particularly useful. They are only provided for old-fashioned
         * die-hard UNIX people ;-)
         */
        export enum FocusPolicy {
            /**
             * Clicking into a window activates it. This is also the default.
             */
            ClickToFocus,
            /**
             * Moving the mouse pointer actively onto a normal window activates it.
             * For convenience, the desktop and windows on the dock are excluded.
             * They require clicking.
             */
            FocusFollowsMouse,
            /**
             * The window that happens to be under the mouse pointer becomes active.
             * The invariant is: no window can have focus that is not under the mouse.
             * This also means that Alt-Tab won't work properly and popup dialogs are
             * usually unusable with the keyboard. Note that the desktop and windows on
             * the dock are excluded for convenience. They get focus only when clicking
             * on it.
             */
            FocusUnderMouse,
            /**
             * This is even worse than FocusUnderMouse. Only the window under the mouse
             * pointer is active. If the mouse points nowhere, nothing has the focus. If
             * the mouse points onto the desktop, the desktop has focus. The same holds
             * for windows on the dock.
             */
            FocusStrictlyUnderMouse
        }

        export enum WindowOperation {
            MaximizeOp = 5000,
            RestoreOp = 5001,
            MinimizeOp = 5002,
            MoveOp = 5003,
            UnrestrictedMoveOp = 5004,
            ResizeOp = 5005,
            UnrestrictedResizeOp = 5006,
            CloseOp = 5007,
            OnAllDesktopsOp = 5008,
            ShadeOp = 5009,
            KeepAboveOp = 5010,
            KeepBelowOp = 5011,
            OperationsOp = 5012,
            WindowRulesOp = 5013,
            /** @obsolete */
            ToggleStoreSettingsOp = WindowRulesOp,
            HMaximizeOp = 5014,
            VMaximizeOp = 5015,
            LowerOp = 5016,
            FullScreenOp = 5017,
            NoBorderOp = 5018,
            NoOp = 5019,
            SetupWindowShortcutOp = 5020,
            ApplicationRulesOp = 5021
        }

        export enum MouseCommand {
            MouseRaise,
            MouseLower,
            MouseOperationsMenu,
            MouseToggleRaiseAndLower,
            MouseActivateAndRaise,
            MouseActivateAndLower,
            MouseActivate,
            MouseActivateRaiseAndPassClick,
            MouseActivateAndPassClick,
            MouseMove,
            MouseUnrestrictedMove,
            MouseActivateRaiseAndMove,
            MouseActivateRaiseAndUnrestrictedMove,
            MouseResize,
            MouseUnrestrictedResize,
            MouseShade,
            MouseSetShade,
            MouseUnsetShade,
            MouseMaximize,
            MouseRestore,
            MouseMinimize,
            MouseNextDesktop,
            MousePreviousDesktop,
            MouseAbove,
            MouseBelow,
            MouseOpacityMore,
            MouseOpacityLess,
            MouseClose,
            MouseNothing
        }

        export enum MouseWheelCommand {
            MouseWheelRaiseLower,
            MouseWheelShadeUnshade,
            MouseWheelMaximizeRestore,
            MouseWheelAboveBelow,
            MouseWheelPreviousNextDesktop,
            MouseWheelChangeOpacity,
            MouseWheelNothing
        }

        export enum GlSwapStrategy {
            /** 'c' */
            CopyFrontBuffer = 99,
            /** 'p' */
            PaintFullScreen = 112,
            /** 'e' */
            ExtendDamage = 101,
            /** 'a' */
            AutoSwapStrategy = 97
        }
        //#endregion
    }

    class Options extends QObject {
        //#region Read-only Properties
        readonly focusPolicyIsReasonable: boolean
        //#endregion

        //#region Read-write Properties
        focusPolicy: Options.FocusPolicy
        xwaylandCrashPolicy: Options.XwaylandCrashPolicy
        xwaylandMaxCrashCount: number
        nextFocusPrefersMouse: boolean
        /**
         * Whether clicking on a window raises it in FocusFollowsMouse
         * mode or not.
         */
        clickRaise: boolean
        /**
         * Whether autoraise is enabled FocusFollowsMouse mode or not.
         */
        autoRaise: boolean
        /**
         * Autoraise interval.
         */
        autoRaiseInterval: number
        /**
         * Delayed focus interval.
         */
        delayFocusInterval: number
        /**
         * Whether shade hover is enabled or not.
         */
        shadeHover: boolean
        /**
         * Shade hover interval.
         */
        shadeHoverInterval: number
        /**
         * Whether to see Xinerama screens separately for focus (in Alt+Tab, when activating next client)
         */
        separateScreenFocus: boolean
        activeMouseScreen: boolean
        placement: number
        /**
         * The size of the zone that triggers snapping on desktop borders.
         */
        borderSnapZone: number
        /**
         * The size of the zone that triggers snapping with other windows.
         */
        windowSnapZone: number
        /**
         * The size of the zone that triggers snapping on the screen center.
         */
        centerSnapZone: number
        /**
         * Snap only when windows will overlap.
         */
        snapOnlyWhenOverlapping: boolean
        /**
         * Whether or not we roll over to the other edge when switching desktops past the edge.
         */
        rollOverDesktops: boolean
        /**
         * 0 - 4 , see Workspace::allowClientActivation()
         */
        focusStealingPreventionLevel: number
        operationTitlebarDblClick: Options.WindowOperation
        operationMaxButtonLeftClick: Options.WindowOperation
        operationMaxButtonMiddleClick: Options.WindowOperation
        operationMaxButtonRightClick: Options.WindowOperation
        commandActiveTitlebar1: Options.MouseCommand
        commandActiveTitlebar2: Options.MouseCommand
        commandActiveTitlebar3: Options.MouseCommand
        commandInactiveTitlebar1: Options.MouseCommand
        commandInactiveTitlebar2: Options.MouseCommand
        commandInactiveTitlebar3: Options.MouseCommand
        commandWindow1: Options.MouseCommand
        commandWindow2: Options.MouseCommand
        commandWindow3: Options.MouseCommand
        commandWindowWheel: Options.MouseCommand
        commandAll1: Options.MouseCommand
        commandAll2: Options.MouseCommand
        commandAll3: Options.MouseCommand
        keyCmdAllModKey: number
        /**
         * Whether the Geometry Tip should be shown during a window move/resize.
         */
        showGeometryTip: boolean
        /**
         * Whether the visible name should be condensed.
         */
        condensedTitle: boolean
        /**
         * Whether a window gets maximized when it reaches top screen edge while being moved.
         */
        electricBorderMaximize: boolean
        /**
         * Whether a window is tiled to half screen when reaching left or right screen edge while been moved.
         */
        electricBorderTiling: boolean
        /**
         * Whether a window is tiled to half screen when reaching left or right screen edge while been moved.
         */
        electricBorderCornerRatio: number
        borderlessMaximizedWindows: boolean
        /**
         * timeout before non-responding application will be killed after attempt to close.
         */
        killPingTimeout: number
        /**
         * Whether to hide utility windows for inactive applications.
         */
        hideUtilityWindowsForInactive: boolean
        compositingMode: number
        useCompositing: boolean
        hiddenPreviews: number
        /**
         * 0 = no, 1 = yes when transformed,
         * 2 = try trilinear when transformed; else 1,
         * -1 = auto
         */
        glSmoothScale: number
        glStrictBinding: boolean
        /**
         * Whether strict binding follows the driver or has been overwritten by a user defined config value.
         * If `true` glStrictBinding is set by the OpenGL Scene during initialization.
         * If `false` glStrictBinding is set from a config value and not updated during scene initialization.
         */
        glStrictBindingFollowsDriver: boolean
        glPreferBufferSwap: Options.GlSwapStrategy
        glPlatformInterface: OpenGLPlatformInterface
        windowsBlockCompositing: boolean
        latencyPolicy: Options.LatencyPolicy
        renderTimeEstimator: Options.RenderTimeEstimator
        //#endregion

        //#region Signals
        readonly focusPolicyChanged: Signal<() => void>
        readonly focusPolicyIsResonableChanged: Signal<() => void>
        readonly xwaylandCrashPolicyChanged: Signal<() => void>
        readonly xwaylandMaxCrashCountChanged: Signal<() => void>
        readonly nextFocusPrefersMouseChanged: Signal<() => void>
        readonly clickRaiseChanged: Signal<() => void>
        readonly autoRaiseChanged: Signal<() => void>
        readonly autoRaiseIntervalChanged: Signal<() => void>
        readonly delayFocusIntervalChanged: Signal<() => void>
        readonly shadeHoverChanged: Signal<() => void>
        readonly shadeHoverIntervalChanged: Signal<() => void>
        readonly separateScreenFocusChanged: Signal<(bool: boolean) => void>
        readonly activeMouseScreenChanged: Signal<() => void>
        readonly placementChanged: Signal<() => void>
        readonly borderSnapZoneChanged: Signal<() => void>
        readonly windowSnapZoneChanged: Signal<() => void>
        readonly centerSnapZoneChanged: Signal<() => void>
        readonly snapOnlyWhenOverlappingChanged: Signal<() => void>
        readonly rollOverDesktopsChanged: Signal<(enabled: boolean) => void>
        readonly focusStealingPreventionLevelChanged: Signal<() => void>
        readonly operationTitlebarDblClickChanged: Signal<() => void>
        readonly operationMaxButtonLeftClickChanged: Signal<() => void>
        readonly operationMaxButtonRightClickChanged: Signal<() => void>
        readonly operationMaxButtonMiddleClickChanged: Signal<() => void>
        readonly commandActiveTitlebar1Changed: Signal<() => void>
        readonly commandActiveTitlebar2Changed: Signal<() => void>
        readonly commandActiveTitlebar3Changed: Signal<() => void>
        readonly commandInactiveTitlebar1Changed: Signal<() => void>
        readonly commandInactiveTitlebar2Changed: Signal<() => void>
        readonly commandInactiveTitlebar3Changed: Signal<() => void>
        readonly commandWindow1Changed: Signal<() => void>
        readonly commandWindow2Changed: Signal<() => void>
        readonly commandWindow3Changed: Signal<() => void>
        readonly commandWindowWheelChanged: Signal<() => void>
        readonly commandAll1Changed: Signal<() => void>
        readonly commandAll2Changed: Signal<() => void>
        readonly commandAll3Changed: Signal<() => void>
        readonly keyCmdAllModKeyChanged: Signal<() => void>
        readonly showGeometryTipChanged: Signal<() => void>
        readonly condensedTitleChanged: Signal<() => void>
        readonly electricBorderMaximizeChanged: Signal<() => void>
        readonly electricBorderTilingChanged: Signal<() => void>
        readonly electricBorderCornerRatioChanged: Signal<() => void>
        readonly borderlessMaximizedWindowsChanged: Signal<() => void>
        readonly killPingTimeoutChanged: Signal<() => void>
        readonly hideUtilityWindowsForInactiveChanged: Signal<() => void>
        readonly compositingModeChanged: Signal<() => void>
        readonly useCompositingChanged: Signal<() => void>
        readonly hiddenPreviewsChanged: Signal<() => void>
        readonly glSmoothScaleChanged: Signal<() => void>
        readonly glStrictBindingChanged: Signal<() => void>
        readonly glStrictBindingFollowsDriverChanged: Signal<() => void>
        readonly glPreferBufferSwapChanged: Signal<() => void>
        readonly glPlatformInterfaceChanged: Signal<() => void>
        readonly windowsBlockCompositingChanged: Signal<() => void>
        readonly animationSpeedChanged: Signal<() => void>
        readonly latencyPolicyChanged: Signal<() => void>
        readonly configChanged: Signal<() => void>
        readonly renderTimeEstimatorChanged: Signal<() => void>
        // TODO glCoreProfileChanged exists?
        //#endregion
    }
}
