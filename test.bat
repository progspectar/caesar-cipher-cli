rem node my_caesar_cli -a encode -s 7 -i "./input.txt" -o "./output.txt"
rem node my_caesar_cli --action encode --shift 7 --input plain.txt --output encoded.txt
rem node my_caesar_cli --action decode --shift -7 --input plain.txt --output encoded.txt
rem node my_caesar_cli --action encode --shift -1 --input plain.txt --output encoded.txt
node my_caesar_cli --action encode --shift -1 
@rem node index --shift 7  --input plain.txt --output encoded.txt
@rem node index -a encode --shift fsafasf --input plain.txt --output encoded.txt
@rem node index --shift 7 -a encode --input plain.txt --output encoded.txt
@rem node index -i in.txt --shift 7 -a decode
@rem xcopy out.txt in.txt
@rem node index --shift 7 -a decode -i in.txt -o out.txt
@rem node index --shift 1 -a encode -i  -o 
@rem node index --shift -1 -a encode 
@rem node index --shift -1.2 -a encode 
@rem node index --shift 33 -a encode 