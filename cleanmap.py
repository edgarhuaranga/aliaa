import json


with open("andalucia.json", "r") as input:
    data = json.loads(input.read())
    cods = []
    for x in data['features']:
        #print(x['properties']['NAME_1'])
        if x['properties']['NAME_1'] == 'Andalucía':
            print(x['properties']['NAME_2'])
            cods.append(x)
    
    data['features'] = cods
    with open("graph.json", 'w') as fx:
            json.dump(data, fx)
  