{/* <script> */}
    var data = [4,8,15,16,23,42];
    // when data is bound to a selection, each element in the data array is paired with the corresponding node in the selection. if there are few nodes than data, the extra data elements form the enter selection, which you can instantiate by appending to the enter selection. for example:
    // var x = d3.scale.linear().domain([0,d3.max(data)]).range([0,420]);
    var x = d3.scaleLinear().domain([0,d3.max(data)]).range([0,420])

    var div1 = d3.select('.chart').selectAll('div').data(data)
    
    div1.enter().append('div').style(
        'width',function(d){
            return x(d) + 'px';
        }
    ).text(function(d){
        return d;
    })

    // var x = d3.scale.linear().domain([0,d3.max(data)]).range([0,420])

    // although x here looks like an object, it is also a function that returns the sacled display value in the range for a given data calue in the domain. for example; to use the new sacle, simply replace the hard-coded multiplication by calling the scale function;
// </script>