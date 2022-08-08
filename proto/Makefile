OUTPUT_DIR=./genfiles

all:
	mkdir -p genfiles
	pbjs -t static-module -w commonjs -o ${OUTPUT_DIR}/api_pb.js api.proto
	pbts -o ${OUTPUT_DIR}/api_pb.d.ts ${OUTPUT_DIR}/api_pb.js

  # Support reflection.
	# pbjs -t json-module -w commonjs -o ${OUTPUT_DIR}/api_pb.js api.proto
	# pbjs -t static-module api.proto | pbts -o ${OUTPUT_DIR}/api_pb.d.ts -

clean:
	rm -r ${OUTPUT_DIR}
