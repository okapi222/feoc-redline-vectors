export interface AnalysisContext {
  document_id: string;
  document_title: string;
  source_filename: string;
  extracted_text: string;
  // later:
  // chunks?: Chunk[];
  // findings?: Finding[];
}
