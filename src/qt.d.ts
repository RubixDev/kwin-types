declare namespace Qt {
    /** The timer type indicates how accurate a timer can be */
    enum TimerType {
        /** Precise timers try to keep millisecond accuracy */
        PreciseTimer = 0,
        /** Coarse timers try to keep accuracy within 5% of the desired interval */
        CoarseTimer = 1,
        /** Very coarse timers only keep full second accuracy */
        VeryCoarseTimer = 2
    }

    /**
     * This enum type defines the various cursors that can be used.
     *
     * The standard arrow cursor is the default for widgets in a normal state.
     */
    enum CursorShape {
        /** The standard arrow cursor. */
        ArrowCursor = 0,
        /** An arrow pointing upwards toward the top of the screen. */
        UpArrowCursor = 1,
        /** A crosshair cursor, typically used to help the user accurately select a point on the screen. */
        CrossCursor = 2,
        /** An hourglass or watch cursor, usually shown during operations that prevent the user from interacting with the application. */
        WaitCursor = 3,
        /** A caret or ibeam cursor, indicating that a widget can accept and display text input. */
        IBeamCursor = 4,
        /** A cursor used for elements that are used to vertically resize top-level windows. */
        SizeVerCursor = 5,
        /** A cursor used for elements that are used to horizontally resize top-level windows. */
        SizeHorCursor = 6,
        /** A cursor used for elements that are used to diagonally resize top-level windows at their top-right and bottom-left corners. */
        SizeBDiagCursor = 7,
        /** A cursor used for elements that are used to diagonally resize top-level windows at their top-left and bottom-right corners. */
        SizeFDiagCursor = 8,
        /** A cursor used for elements that are used to resize top-level windows in any direction. */
        SizeAllCursor = 9,
        /** A blank/invisible cursor, typically used when the cursor shape needs to be hidden. */
        BlankCursor = 10,
        /** A cursor used for vertical splitters, indicating that a handle can be dragged horizontally to adjust the use of available space. */
        SplitVCursor = 11,
        /** A cursor used for horizontal splitters, indicating that a handle can be dragged vertically to adjust the use of available space. */
        SplitHCursor = 12,
        /** A pointing hand cursor that is typically used for clickable elements such as hyperlinks. */
        PointingHandCursor = 13,
        /** A slashed circle cursor, typically used during drag and drop operations to indicate that dragged content cannot be dropped on particular widgets or inside certain regions. */
        ForbiddenCursor = 14,
        /** A cursor representing an open hand, typically used to indicate that the area under the cursor is the visible part of a canvas that the user can click and drag in order to scroll around. */
        OpenHandCursor = 17,
        /** A cursor representing a closed hand, typically used to indicate that a dragging operation is in progress that involves scrolling. */
        ClosedHandCursor = 18,
        /** An arrow with a question mark, typically used to indicate the presence of What's This? help for a widget. */
        WhatsThisCursor = 15,
        /** An hourglass or watch cursor, usually shown during operations that allow the user to interact with the application while they are performed in the background. */
        BusyCursor = 16,
        /** A cursor that is usually used when dragging an item. */
        DragMoveCursor = 20,
        /** A cursor that is usually used when dragging an item to copy it. */
        DragCopyCursor = 19,
        /** A cursor that is usually used when dragging an item to make a link to it. */
        DragLinkCursor = 21,
        BitmapCursor = 24
    }
}

/**
 * The QObject class is the base class of all Qt objects
 */
declare class QObject {
    /**
     * This property holds the name of this object
     *
     * By default, this property contains an empty string.
     *
     * **Note:** This is a private signal. It can be used in signal connections
     * but cannot be emitted by the user.
     */
    objectName: string

    /**
     * This signal is emitted after the object's name has been changed. The
     * new object name is passed as `objectName`.
     *
     * **Note:** This is a private signal. It can be used in signal connections
     * but cannot be emitted by the user.
     *
     * **Note:** Notifier signal for property {@link QObject.objectName objectName}.
     * @see {@link QObject.objectName}
     */
    objectNameChanged: Signal<(objectName: string) => void>

    /**
     * Constructs an object with parent object {@link parent}.
     */
    constructor(parent?: QObject)
}

/**
 * The QTimer class provides repetitive and single-shot timers.
 */
declare class QTimer {
    /**
     * This property holds whether the timer is a single-shot timer
     *
     * A single-shot timer fires only once, non-single-shot timers fire every interval milliseconds.
     *
     * The default value for this property is false.
     * @see {@link interval}
     */
    singleShot: boolean
    /**
     * This property holds the timeout interval in milliseconds
     *
     * The default value for this property is 0. A QTimer with a timeout interval of 0
     * will time out as soon as all the events in the window system's event queue
     * have been processed.
     * @see {@link singleShot}
     */
    interval: number
    /**
     * This property holds the remaining time in milliseconds
     *
     * Returns the timer's remaining value in milliseconds left until the timeout.
     * If the timer is inactive, the returned value will be -1. If the timer is overdue,
     * the returned value will be 0.
     * @since 5.0
     * @see {@link interval}
     */
    readonly remainingTime: number
    /**
     * controls the accuracy of the timer
     *
     * The default value for this property is {@link TimerType.CoarseTimer}.
     * @see {@link TimerType}
     */
    timerType: Qt.TimerType
    /**
     * This boolean property is true if the timer is running; otherwise false
     * @since 4.3
     */
    readonly active: boolean

    /**
     * This signal is emitted when the timer times out.
     *
     * **Note:** This is a private signal. It can be used in signal connections but cannot be emitted by the user.
     * @see {@link QTimer.interval interval}, {@link QTimer.start start}, {@link QTimer.stop stop}
     */
    readonly timeout: Signal<() => void>

    /**
     * Starts or restarts the timer with the timeout specified in {@link interval}.
     *
     * If the timer is already running, it will be stopped and restarted.
     *
     * If {@link singleShot} is true, the timer will be activated only once.
     */
    start(): void
    /**
     * Starts or restarts the timer with a timeout interval of {@link msec} milliseconds.
     *
     * If the timer is already running, it will be stopped and restarted.
     *
     * If {@link singleShot} is true, the timer will be activated only once.
     */
    start(msec: number): void
    /**
     * Stops the timer.
     * @see {@link start}
     */
    stop(): void
}

declare interface QSize {
    width: number
    height: number
}

declare interface QRect {
    x: number
    y: number
    width: number
    height: number
    readonly left?: number
    readonly right?: number
    readonly top?: number
    readonly bottom?: number
}

declare interface QPoint {
    x: number
    y: number
}

// TODO might just be a string
declare type QUuid = object
// TODO when is `paletteChanged` emitted?
declare type QPalette = any
// TODO Could only find as `QVariant(QRegion, QRegion(2,199 722x25))`
declare type QRegion = any
// TODO Could only find as `QVariant(QIcon, QIcon(availableSizes[normal,Off]=(QSize(16, 16), QSize(32, 32), QSize(1024, 1024)),cacheKey=0xf00000004))`
declare type QIcon = any
/**
 * QJSValue supports the types defined in the ECMA-262 standard: The primitive types,
 * which are Undefined, Null, Boolean, Number, and String; and the Object and Array
 * types. Additionally, built-in support is provided for Qt/C++ types such as QVariant
 * and QObject.
 * @see https://doc.qt.io/qt-5/qjsvalue.html#details
 */
declare type QJSValue = any
/**
 * The QVariant class acts like a union for the most common Qt data types.
 * @see https://doc.qt.io/qt-5/qvariant.html
 */
declare type QVariant = any
/**
 * The QAction class provides an abstract user interface action that can be inserted into widgets.
 *
 * TODO: Could only find as `QAction(0x55847b7605e0, "...")`
 * @see https://doc.qt.io/qt-5/qaction.html
 */
declare type QAction = any
