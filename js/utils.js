String.prototype.startswith = function(s) {
  return (this.match("^"+s)==s)
}

String.prototype.endswith = function(s) {
  return (this.match(s+"$")==s)
}

String.prototype.splitlines = function(s) {
  return s.split('\n') 
}

String.prototype.splitchunks = function(s) {
  return s.split(/\n\n+/) 
}
