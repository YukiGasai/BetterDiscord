/**
 * @name Example Plugin
 * @authorId 51512151151651
 * @authorLink https://twitter.com/Whoever
 * @source https://gist.github.com/rauenzi/e5f4d02fc3085a53872b0236cd6f8225
 */

module.exports = class ExamplePlugin {
  getName() {return "Example Plugin";} // Name of your plugin to show on the plugins page 
  getDescription() {return "Describe the basic functions. Maybe a support server link.";} // Description to show on the plugins page 
  getVersion() {return "0.0.1";} // Current version. I recommend following semantic versioning <http://semver.org/> (e.g. 0.0.1)
  getAuthor() {return "YourName";} // Your name

  load() {} // Called when the plugin is loaded in to memory

  start() {



    
  
  } // Called when the plugin is activated (including after reloads)
  stop() {} // Called when the plugin is deactivated

  observer(changes) {} // Observer for the `document`. Better documentation than I can provide is found here: <https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver>
}