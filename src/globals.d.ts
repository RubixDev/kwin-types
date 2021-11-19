//#region Functions
/**
 * Prints all provided values to kDebug and as a D-Bus signal
 */
declare function print(...values: QVariant[]): void
/**
 * Reads the config value for key in the Script’s configuration with the optional
 * default value. If not providing a default value and no value stored in the
 * configuration an undefined value is returned.
 */
declare function readConfig(key: string, defaultValue?: QVariant): QVariant
/**
 * Call a D-Bus method at (service, path, interface and method). A variable number
 * of arguments can be added to the method call. The D-Bus call is always performed
 * in an async way invoking the callback provided as the last (optional) argument.
 * The reply values of the D-Bus method call are passed to the callback (the last argument).
 */
declare function callDBus(
    service: string,
    path: string,
    interface: string,
    method: string,
    ...args: QJSValue[]
): void
/**
 * Registers keySequence as a global shortcut. When the shortcut is invoked the callback
 * will be called. Title and text are used to name the shortcut and make it available to
 * the global shortcut configuration module.
 */
declare function registerShortcut(
    title: string,
    text: string,
    keySequence: string,
    callback: (action: QAction) => void
): boolean
/**
 * Registers the callback for the screen edge. When the mouse gets pushed against the
 * given edge the callback will be invoked. Scripts can also set “X-KWin-Border-Activate”
 * to true in their metadata file to have the effect listed in the screen edges KCM. This will
 * write an entry BorderConfig= in the script configuration object with a list of ScreenEdges
 * the user has selected.
 */
declare function registerScreenEdge(edge: number, callback: () => void): boolean
/**
 * Unregisters the callback for the screen edge. This will disconnect all callbacks from
 * this script to that edge.
 */
declare function unregisterScreenEdge(edge: number): boolean
declare function registerTouchScreenEdge(
    edge: number,
    callback: () => void
): boolean
declare function unregisterTouchScreenEdge(edge: number): boolean
/**
 * Registers the given `callback` to be invoked whenever the UserActionsMenu is about
 * to be showed. In the callback the script can create a further sub menu or menu entry to be
 * added to the UserActionsMenu.
 * @param callback Script method to execute when the UserActionsMenu is about to be shown.
 */
declare function registerUserActionsMenu(
    callback: (client: KWin.AbstractClient) => void
): void
/**
 * Aborts the execution of the script if value does not evaluate to true. If message is
 * provided an error is thrown with the given message, if not provided an error with default
 * message is thrown.
 */
declare function assert(condition: boolean, message?: string): boolean
/**
 * Aborts the execution of the script if value does not evaluate to true. If message is
 * provided an error is thrown with the given message, if not provided an error with default
 * message is thrown.
 */
declare function assertTrue(condition: boolean, message?: string): boolean
/**
 * Aborts the execution of the script if value does not evaluate to false. If message is
 * provided an error is thrown with the given message, if not provided an error with default
 * message is thrown.
 */
declare function assertFalse(condition: boolean, message?: string): boolean
/**
 * Aborts the execution of the script if value is not null. If message is provided an error
 * is thrown with the given message, if not provided an error with default message is thrown.
 */
declare function assertNull(value: QVariant, message?: string): boolean
/**
 * Aborts the execution of the script if value is null. If message is provided an error is
 * thrown with the given message, if not provided an error with default message is thrown.
 */
declare function assertNotNull(value: QVariant, message?: string): boolean
/**
 * Aborts the execution of the script if the actual value is not equal to the expected value.
 * If message is provided an error is thrown with the given message, if not provided an error
 * with default message is thrown.
 */
declare function assertEquals(
    expected: QVariant,
    actual: QVariant,
    message?: string
): boolean
//#endregion

declare const workspace: KWin.QtScriptWorkspaceWrapper
declare const options: KWin.Options

declare interface Signal<T> {
    /**
     * Connects a function to a signal
     * @param callback A function to be called, when the signal is emitted
     * @see {@link Signal.disconnect}
     */
    connect(callback: T): void
    /**
     * Disconnects a function from a signal
     * @param callback The function to disconnect. Must be the same as on the
     * {@link Signal.connect connect()} call, so anonymous function won't work
     * @see {@link Signal.connect}
     */
    disconnect(callback: T): void
}
