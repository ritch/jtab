function jtab(data, options) {
  if(data && data.length) {
    var headers = {}
      , table = ''
      , th = ''
      , val
      , obj
      , type;
   
    // each row
    for(var i = 0, len = data.length; i < len; i++) {
      table += '\n\t\t<tr>';
      
      // item type check
      obj = data[i];
      type = typeof obj;
      if(type != 'object') {
        val = obj;
        obj = {};
        obj['value'] = val;
      }
      
      // build out headers
      Object.keys(obj).forEach(function(key) {
        val = data[i][key] || data[i];
        type = typeof val;
        
        // determine headers and type
        if(headers[key] && headers[key] != type) {
          headers[key] = type = 'object';
        } else {
          headers[key] = type;
        }
      })

      // each cell
      Object.keys(headers).forEach(function(key) {
        val = obj[key];
        type = typeof val;
        
        if(type == 'object') val = '...';
        
        // write out cell
        table += '\n\t\t\t<td class="' + key + ' ' + type + '">' + (val || '') + '</td>'
      })
      
      // end row
      table += '\n\t\t</tr>';
    }
    
    // write out headers
    Object.keys(headers).forEach(function(key) {
      th += '\n\t\t<th class="' + headers[key] + '">' + key + '</th>'
    });

    // return final output
    return '<table>\n\t<thead>' + th + '\n\t</thead>\n\t<tbody>' + table + '\n\t</tbody>\n</table>';
  }
}