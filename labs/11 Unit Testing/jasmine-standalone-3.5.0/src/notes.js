var notes = (function() {
  var list = [];

  return {
    add: function(note) {
      if (note && note.trim()) {
        var item = {timestamp: Date.now(), text: note};
        list.push(item);
        return true;
      }
      return false;
    },
    remove: function(index) {
      if (index < this.count() && index >= 0) {
        list.splice(index, 1);
        return true;
      }
      return false;
    },
    count: function() {
      return list.length;
    },
    list: function() {},
    find: function(str) {
      for (let i = 0; i < this.count(); i++) {
        if (list[i].text === str) {
          return i;
        }
      }
      return -1;
    },
    clear: function() {
      list.splice(0, list.length);
    }
  }
}());