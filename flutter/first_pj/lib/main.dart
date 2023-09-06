import 'package:flutter/material.dart';

/// https://dart.dev/language continue lendo!!

void main() {
  runApp(MyApp());
}

class Todo {
  final String who;
  final String what;

  const Todo(this.who, this.what);
}

@Todo('Dash', 'Implement this function')
void doSomething(String name, String thing) {
  // ignore: avoid_print
  print("$name do $thing");
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    doSomething("Filippo", "Ler Documentação");

    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: const Text('hellow'),
          backgroundColor: Colors.blueGrey,
        ),
        // body: Container(
        //   alignment: Alignment.center,
        //   child: const Text('hi'),
        //   margin: const EdgeInsets.all(100),
        //   padding: const EdgeInsets.all(10),
        //   color: Colors.red[400],
        //   height: 100,
        //   width: 100,
        //   decoration: BoxDecoration(

        //   ),
        // ),

        body: const Row(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          crossAxisAlignment: CrossAxisAlignment.end,
          children: [
            Expanded(
              flex: 4,
              child: Icon(Icons.backpack),
            ),
            Icon(Icons.person),
            Icon(Icons.person),
          ],
        ),
      ),
    );
  }
}
