import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RecordsService } from './records.service';
import { CreateRecordDto } from './dto/create-record.dto';

@Controller('records')
export class RecordsController {
  constructor(private readonly recordsService: RecordsService) {}

  @Post('create')
  create(@Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.create(createRecordDto);
  }

  @Get()
  findAll() {
    return this.recordsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.recordsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() createRecordDto: CreateRecordDto) {
    return this.recordsService.update(+id, createRecordDto);
  }

  @Patch('patient/:patientId/record/:recordId')
  updateRecordForPatient(
    @Param('patientId') patientId: string,
    @Param('recordId') recordId: string,
    @Body() createRecordDto: CreateRecordDto
  ) {
    return this.recordsService.updateRecordForPatient(+patientId, +recordId, createRecordDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.recordsService.remove(+id);
  }
}
